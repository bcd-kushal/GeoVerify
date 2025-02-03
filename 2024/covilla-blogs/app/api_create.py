from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

ATLAS_URI = "mongodb+srv://naveen:Z7RHvWPN4orjL74y@edtech.qdjcop3.mongodb.net/?retryWrites=true&w=majority"


#==================================================================
#==================================================================

# add comment
def post_comment(obj:dict={}, title:str=""):
    if obj["comment"] == "" or obj["name"] == "" or obj["email"] == "":
        return False 
    
    
    mongo_client = MongoClient(ATLAS_URI,server_api = ServerApi('1'))
    
    atlas_db = mongo_client.get_database("blogs")

    # insert comment into blog field
    data = atlas_db.comments

    res = data.find_one({ "title": title })

    if res:
        data.update_one({ "title": title }, { "$addToSet": { "comments": obj } })

    else: 
        data.insert_one({
            "title": title,
            "comments": obj
        })



    # update total comments in blog brief
    data = atlas_db.blog_brief

    res = data.find_one({ "title": title })

    if res:
        num = int(res["comments"]) + 1
        data.update_one({ "title": title }, { "$set": { "comments": str(num) } })

    else: 
        data.insert_one({
            "title": title,
            "comments": obj
        })


    # increase comment count by 1
    data = atlas_db.statistics

    res = data.find_one({ "total_comments": { "$exists": True } })
    res = int(res["total_comments"]) + 1
    res = data.update_one({ "total_comments": { "$exists": True } }, { "$set": { "total_comments": res } })


    return True







# add subscriber
def add_subscriber(email:str, preference:str):

    if email == "" or preference == "":
        return False 
    
    
    mongo_client = MongoClient(ATLAS_URI,server_api = ServerApi('1'))
    
    atlas_db = mongo_client.get_database("blogs")
    data = atlas_db.subscribed_mails

    res = data.find_one({ "email": email })

    if res:
        data.update_one({ "email": email }, { "$set": { "tag": preference } })
        return "You preferences are updated!"

    else: 
        data.insert_one({
            "email": email,
            "tag": preference
        })


    return "You are added!"

