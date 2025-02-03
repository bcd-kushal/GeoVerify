from datetime import datetime, timedelta

from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from .models import *

ATLAS_URI = "mongodb+srv://naveen:Z7RHvWPN4orjL74y@edtech.qdjcop3.mongodb.net/?retryWrites=true&w=majority"


#==================================================================
#==================================================================

def delete_blog(blog):
    if blog is None or blog == "":
        return False
    
    val = True


    mongo_client = MongoClient(ATLAS_URI,server_api = ServerApi('1'))
    
    atlas_db = mongo_client.get_database("blogs")


    # delete whole blog first
    data = atlas_db.blog
    result = data.delete_one({ "title": blog })

    if result.deleted_count == 1:
        val &= True
    else: 
        val &= False


    
    # delete thumbnail from SQL
    image = thumbnails.objects.filter(title=blog).first()
    if image:
        image.delete()



    # delete blog brief
    data = atlas_db.blog_brief

    result = data.delete_one({ "title": blog })

    if result.deleted_count == 1:
        val &= True
    else: 
        val &= False





    # delete comment on that blog
    data = atlas_db.comments
    
    # get total comments on this blog
    comments = data.find_one({ "title": blog })
    comments = len(comments["comments"])
        

    result = data.delete_one({ "title": blog })

    if result.deleted_count == 1:
        val &= True
    else: 
        val &= False



    

    # delete total blog count
    data = atlas_db.statistics
    result = data.find_one({ "total_blogs": { "$exists": True } })

    total_comments = int(result["total_comments"])
    total_comments -= comments

    new_val = int(result["total_blogs"]) - 1

    data.update_many({ "total_blogs": { "$exists": True } }, { "$set": { "total_blogs": new_val, "total_comments": total_comments } })

    val &= True

    return val

    










def do_comment_delete(blog:str, name:str, comment:str):
    if blog=="" or blog==None:
        return False
    if name=="" or name==None:
        return False
    if comment=="" or comment==None:
        return False

    
    mongo_client = MongoClient(ATLAS_URI,server_api = ServerApi('1'))
    
    atlas_db = mongo_client.get_database("blogs")


    # firstly delete the comment in actuality
    data = atlas_db.comments
    result = data.find_one({ "title": blog })

    comments = result["comments"]

    new_obj = []

    for x in comments:
        if x["name"] == name and x["comment"] == comment:
            continue
        new_obj.append({
            "name": x["name"],
            "email": x["email"],
            "comment": x["comment"]
        })


    result = data.update_one({ "title": blog }, { "$set": { "comments": new_obj } })




    # reduce in blog_brief by 1
    data = atlas_db.blog_brief
    result = data.find_one({ "title": blog })

    result = int(result["comments"]) - 1

    result = data.update_one({ "title": blog }, { "$set": { "comments": str(result) } })





    # update total comment count
    data = atlas_db.statistics
    result = data.find_one({ "total_comments": { "$exists": True } })

    new_val = int(result["total_comments"]) - 1

    data.update_one({ "total_comments": { "$exists": True } }, { "$set": { "total_comments": new_val } })



    return True
    

