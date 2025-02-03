from datetime import datetime, timedelta

from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

ATLAS_URI = "mongodb+srv://naveen:Z7RHvWPN4orjL74y@edtech.qdjcop3.mongodb.net/?retryWrites=true&w=majority"


#==================================================================
#==================================================================

def get_blog_comments(blog):
    if blog is None or blog == "":
        return False
    
    
    mongo_client = MongoClient(ATLAS_URI,server_api = ServerApi('1'))
    
    atlas_db = mongo_client.get_database("blogs")
    data = atlas_db.comments


    print("\n\n----------> blog title: ", blog)

    result = data.find_one({ "title": blog })

    print("\n\n----------> comments: ", result)


    comments = result["comments"]

    return comments






def get_header_items(blog:str):
    if blog == "" or blog == None:
        return False 
    
    mongo_client = MongoClient(ATLAS_URI,server_api = ServerApi('1'))
    
    atlas_db = mongo_client.get_database("blogs")
    data = atlas_db.blog_brief


    result = data.find_one({ "title": blog })

    return {
        "thumbnail": result["thumbnail"],
        "tag": result["tag"]
    }










def get_intro_body(blog:str):
    if blog == "" or blog == None:
        return False 
    
    mongo_client = MongoClient(ATLAS_URI,server_api = ServerApi('1'))
    
    atlas_db = mongo_client.get_database("blogs")
    data = atlas_db.blog


    result = data.find_one({ "title": blog })

    return {
        "header": result["header"],
        "body": result["body"]
    }











def get_body(blog:str):
    if blog == "" or blog == None:
        return False 
    
    mongo_client = MongoClient(ATLAS_URI,server_api = ServerApi('1'))
    
    atlas_db = mongo_client.get_database("blogs")
    data = atlas_db.blog


    result = data.find_one({ "title": blog })

    return result["body"]

