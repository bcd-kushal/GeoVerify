from datetime import datetime, timedelta

from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

import re
from bs4 import BeautifulSoup


ATLAS_URI = "mongodb+srv://naveen:Z7RHvWPN4orjL74y@edtech.qdjcop3.mongodb.net/?retryWrites=true&w=majority"


def linked_name(title):
    # Remove special characters
    title = re.sub(r'[^a-zA-Z0-9\s]', '', title)
    
    # Convert to lowercase
    title_lower = title.lower()
    
    # Replace spaces with hyphens
    title_hyphenated = title_lower.replace(' ', '-')
    
    return title_hyphenated




def h2_titles(str):
    titles = []
    hyphen_titles = []

    new_str = ""

    soup = BeautifulSoup(str,'html.parser')
    h2_tags = soup.find_all('h2')

    # remove special chars
    pattern = re.compile(r'[^a-zA-Z0-9\s]')

    # get hyphenated titles for id
    for h2_tag in h2_tags:
        title = h2_tag.get_text(strip=True)
        title = re.sub(pattern, '', title)

        titles.append(title)

        hyphenated_title = title.lower().replace(' ','-')

        hyphen_titles.append(hyphenated_title)

        h2_tag['id'] = hyphenated_title


    # insert id into h2 tags
    h2_pattern = re.compile(r'<h2>')

    split_list = re.split(h2_pattern, str)


    if str[:4]=="<h2>":
        split_list = split_list[1:]



    split_list2 = []

    for list in split_list:
        list = "<h2>" + list
        split_list2.append(list)

    i=0

    for id_word in hyphen_titles:
        h2_str = split_list2[i]
        h2_str = re.sub(h2_pattern, lambda match: f'<h2 id=\'{id_word}\'>', h2_str, count=1)
        split_list2[i] = h2_str
        i+=1



    new_str = ""

    for x in split_list2:
        new_str += x

    contents = []

    for i in range(len(hyphen_titles)):
        obj = {
            "content": titles[i],
            "content_link": hyphen_titles[i],
            "number": i+1
        }
        contents.append(obj)



    print("\n\n@@@@@@@@@@@@@@@@@@@@@@@@\n",contents,"\n\n")



    return {
        "modified_body": new_str,
        "contents": contents
    }



#==================================================================
#==================================================================

def publish_new_blog(obj:dict):

    mongo_client = MongoClient(ATLAS_URI,server_api = ServerApi('1'))
    
    atlas_db = mongo_client.get_database("blogs")


    # get all required details
    blog = obj["title"]
    tag:str = obj["tag"]
    tag = tag.capitalize()
    thumbnail = obj["thumbnail"]

    header = obj["header"]
    body = obj["body"]

    comments = []

    tag_link = f"/categories/{tag.lower()}"
    dateRN = datetime.now().strftime("%d %B, %Y")
    blog_link = f"/blog/{linked_name(blog)}/"

    author = "Kushal Kumar"

    # x = h2_titles(body)

    contents = []


    print(f"\n\n*******************************************\n\nblog={blog}\ntag={tag}\nthumbnail={thumbnail}\ntag_link={tag_link}\ndateRN={dateRN}\nblog_link={blog_link}\ncontents={contents}\nbody={body}")


    # create blog
    data = atlas_db.blog

    res = data.insert_one({
        "title": blog,
        "date": dateRN,
        "author": author,
        "thumbnail": thumbnail,
        "tag": tag,
        "contents": contents,
        "header": header,
        "body": body
    })





    # create blog brief
    data = atlas_db.blog_brief

    res = data.insert_one({
        "title": blog,
        "thumbnail": thumbnail,
        "tag": tag,
        "tag_link": tag_link,
        "date": dateRN,
        "comments": "0",
        "link": blog_link,
        "brief": header[:150]
    })






    # create comment area
    data = atlas_db.comments

    res = data.insert_one({
        "title": blog,
        "comments": comments
    })




    # upgrade total blogs
    data = atlas_db.statistics

    res = data.find_one({ "total_blogs": { "$exists": True } })

    res = int(res["total_blogs"]) + 1
    result = data.update_one({ "total_blogs": { "$exists": True } }, { "$set": { "total_blogs": res } })


    return True