from datetime import datetime, timedelta

from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

from bs4 import BeautifulSoup

import re



ATLAS_URI = "mongodb+srv://naveen:Z7RHvWPN4orjL74y@edtech.qdjcop3.mongodb.net/?retryWrites=true&w=majority"


def to_link(title):
    # Remove special characters
    title = re.sub(r'[^a-zA-Z0-9\s]', '', title)
    
    # Convert to lowercase
    title_lower = title.lower()
    
    # Replace spaces with hyphens
    title_hyphenated = title_lower.replace(' ', '-')
    
    return title_hyphenated


""" 

def to_link(str):
    l = str.lower()
    n = l.replace(' ', '-')
    return n """



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
    h2_pattern = re.compile(r'<h2(?:\s+(?:class|id)="[^"]*")?>(.*?)</h2>', re.IGNORECASE | re.DOTALL)

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

def update_blog_brief(title:str, tag:str, old_title:str, thumbnail:str=""):
    if title=="" or title==None:
        return False
    if tag=="" or tag==None:
        return False
    if old_title=="" or old_title==None:
        return False
    

    tag = tag.lower()


    tag_link = f"/categories/{tag}"
    blog_link = f"/blog/{to_link(title)}/"


    
    mongo_client = MongoClient(ATLAS_URI,server_api = ServerApi('1'))
    
    atlas_db = mongo_client.get_database("blogs")
    data = atlas_db.blog_brief


    result = data.update_many({ "title": old_title }, { "$set": { "title": title, "tag": tag.title(), "thumbnail": thumbnail, "tag_link": tag_link, "link": blog_link } })

    return True










def update_blog_title_everywhere(old_title:str, new_title:str):
    if old_title=="" or old_title==None:
        return False
    if new_title=="" or new_title==None:
        return False
    
    
    mongo_client = MongoClient(ATLAS_URI,server_api = ServerApi('1'))
    
    atlas_db = mongo_client.get_database("blogs")

    data = atlas_db.blog
    result = data.update_one({ "title": old_title }, { "$set": { "title": new_title } })

    data = atlas_db.comments
    result = data.update_one({ "title": old_title }, { "$set": { "title": new_title } })

    return True








def update_blog_body(blog:str, header:str, body:str):
    if blog=="" or blog==None:
        return False
    if header=="" or header==None:
        return False
    if body=="" or body==None:
        return False
    

    # mod = h2_titles(body)

    contents = []


    mongo_client = MongoClient(ATLAS_URI,server_api = ServerApi('1'))
    
    atlas_db = mongo_client.get_database("blogs")

    # MAIN BLOG
    data = atlas_db.blog
    result = data.update_many({ "title": blog }, { "$set": { "header": header, "body": body, "contents": contents } })


    # BLOG BRIEF
    short_brief = header[:80]

    data = atlas_db.blog_brief
    result = data.update_one({ "title": blog }, { "$set": { "brief": short_brief } })

    return True



