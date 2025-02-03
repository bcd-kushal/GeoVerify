from django.shortcuts import render

import time
import threading

from django.views.decorators.cache import cache_page
from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate as default_authenticate, login as LoginUser, logout as LogoutUser
from django.contrib.auth.models import User as RegisteredUsers
from django.contrib.auth.views import LoginView
from django.views.decorators.csrf import csrf_exempt


from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

from .api_read import *
from .api_create import *

# ================================================================================================================



# @/blog/<str:id>/
def blog(req,id):
    if req.method == "GET":

        id = id.replace('-',' ')

        blog = get_whole_blog(id)
        
        return render(req,"src/blog.html",{
            "tab_title": f"{blog['title']}: MyBlogs",

            # blog details
            "title": blog["title"],
            "date": blog["date"],
            "author": blog["author"],
            "thumbnail": blog["thumbnail"],
            "tag": blog["tag"],
            
            "header": blog["header"],
            "body": blog["body"],


            # more blogs
            "more_blogs": get_more_blogs(blog["tag"]),


            # recents
            "recents": get_recent_blog_titles(),

            # comments
            "comments": get_blog_comments(blog=id),



            # statistics
            "statistics": get_site_stats()
        })
    

    elif req.method == "POST":

        props = {
                    "title": "Oops, error!",
                    "subtitle": "Your comment should have everything filled up."
                }


        if req.POST.get("comment"):
            blog_name = req.POST.get("blog_name")
            name = req.POST.get("author")
            email = req.POST.get("email")
            comment = req.POST.get("comment")

            obj = {
                "name": name,
                "email": email,
                "comment": comment
            }

            result = post_comment(title=blog_name,obj=obj)


            if result:
                props = {
                    "title": "Thank You!",
                    "subtitle": "Your comment shall prove invaluable to us!!"
                }
                


        return render(req,"src/success.html",props)


    else:
        return send_bad_request(req)














# @/
def homepage(req):
    if req.method == "GET":
        return render(req,"src/all_blogs.html",{
            "tab_title": "MyBlogs: Home",

            "page_title": "All Blogs",
            "page_brief": "Stay up to date with the most recent news and updates of our team happenings",

            "recents": get_recent_blog_titles(),

            "blogs": get_blogs(),

            "statistics": get_site_stats()
        })
    else:
        return send_bad_request(req)
    



# @/categories/
def categories(req):
    if req.method == "GET":
        return render(req,"src/categories.html",{
            "statistics": get_site_stats()
            
        })
    else:
        return send_bad_request(req)
    




# @/categories/design/
def design_blogs(req):
    if req.method == "GET":
        return render(req,"src/all_blogs.html",{
            "tab_title": "Design Blogs: MyBlogs",

            "page_title": "Design Blogs",
            "page_brief": "For the design-centric peeps out there",

            "recents": get_recent_blog_titles(),

            "blogs": get_blogs(type="Design"),

            "statistics": get_site_stats()
        })
    else:
        return send_bad_request(req)


# @/categories/tech/
def tech_blogs(req):
    if req.method == "GET":
        return render(req,"src/all_blogs.html",{
            "tab_title": "Tech Blogs: MyBlogs",

            "page_title": "Technical Blogs",
            "page_brief": "Technology is the present, and future afterall",

            "recents": get_recent_blog_titles(),

            "blogs": get_blogs(type="Tech"),

            "statistics": get_site_stats()
        })
    else:
        return send_bad_request(req)


# @/categories/my-life/
def life_blogs(req):
    if req.method == "GET":
        return render(req,"src/all_blogs.html",{
            "tab_title": "Life Blogs: MyBlogs",

            "page_title": "Life Blogs",
            "page_brief": "The daily happenings jotted down",

            "recents": get_recent_blog_titles(),

            "blogs": get_blogs(type="Life"),

            "statistics": get_site_stats()
        })
    else:
        return send_bad_request(req)


# @/categories/profession/
def profession_blogs(req):
    if req.method == "GET":
        return render(req,"src/all_blogs.html",{
            "tab_title": "Professional Blogs: MyBlogs",

            "page_title": "Profession Blogs",
            "page_brief": "Staying stern and sharp on the work sector with blogs",

            "recents": get_recent_blog_titles(),

            "blogs": get_blogs(type="Profession"),

            "statistics": get_site_stats()
        })
    else:
        return send_bad_request(req)





# @/categories/daily/
def daily_blogs(req):
    if req.method == "GET":
        return render(req,"src/all_blogs.html",{
            "tab_title": "Daily Blogs: MyBlogs",

            "page_title": "Daily Blogs",
            "page_brief": "A daily record into the life of us.",

            "recents": get_recent_blog_titles(),

            "blogs": get_blogs(type="Daily"),

            "statistics": get_site_stats()
        })
    else:
        return send_bad_request(req)





# @/categories/community/
def community_blogs(req):
    if req.method == "GET":
        return render(req,"src/all_blogs.html",{
            "tab_title": "Community Blogs: MyBlogs",

            "page_title": "Community Blogs",
            "page_brief": "For the readers, by the readers, to the readers",

            "recents": get_recent_blog_titles(),

            "blogs": get_blogs(type="Community"),

            "statistics": get_site_stats()
        })
    else:
        return send_bad_request(req)







# @/recents/
def recents(req):
    if req.method == "GET":
        return render(req,"src/all_blogs.html",{
            "tab_title": "Recent Blogs: MyBlogs",

            "page_title": "Recent Blogs",
            "page_brief": "We add blogs on a weekly basis",

            "recents": get_recent_blog_titles(),

            "blogs": get_blogs(),

            "statistics": get_site_stats()
        })
    else:
        return send_bad_request(req)







# @/search?query=...
def search(req):
    if req.method == "GET":

        keyword = req.GET.get("keywords",None)
        blogs = get_searched_blogs(search_word=keyword)
        total = len(blogs)

        return render(req,"src/all_blogs.html",{
            "tab_title": "Search Results: MyBlogs",

            "page_title": f"Search results for '{keyword}'",
            "page_brief": f"Found a total of {total} related blogs",

            "recents": get_recent_blog_titles(),

            "blogs": blogs,

            "statistics": get_site_stats()
        })
    else:
        return send_bad_request(req)








# @/subscribe/
def subscribe(req):
    if req.method == "GET":
        return render(req,"src/subscribe.html",{})
    
    elif req.method == "POST":
        props = {
                    "title": "Oops, error!",
                    "subtitle": "Your comment should have everything filled up."
                }
        
        email = req.POST.get("email")
        preference = req.POST.get("preference")

        # print(f"--------------> email:{email} | preference:{preference}")

        result = add_subscriber(email=email, preference=preference)

        if result:
            props = {
                "title": result,
                "subtitle": f"You will get updates for '{preference}' blogs on your registered email to be the first to read it!!"
            }
        
        return render(req,"src/success.html",props)

    else:
        return send_bad_request(req)





# ===== error page =====================================

def send_bad_request(req):
    return render(req,"src/error/error.html",{})
