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

from .api_read_admin import *
from .api_create_admin import *
from .api_delete_admin import *
from .api_update_admin import *
from .models import *

from app import api_read

# ================================================================================================================



# =======[ LOGIN AND ERROR HANDLING ]============================================================================================
def admin_login(req):
    if req.method == "GET":
        return render(req,"src/admin_login/login.html",{})
    
    elif req.method == "POST":
        admin_name = req.POST.get("admin_name")
        password = req.POST.get("admin_password")

        print(f"\n\n----------------> admin = {admin_name} | password: {password}\n\n")


        user = default_authenticate(req, username=admin_name, password=str(password))

        if user is not None:
            LoginUser(req, user)
            return redirect("/admin/")
        
        else:
            LogoutUser(req)
            return render(req,"src/admin_login/admin_error.html",{})

    else:
        return send_bad_request(req)
    




def admin_logout(req):
    if req.method == "GET":
        LogoutUser(req)
        return redirect('/admin-login/')
    else: 
        return send_bad_request(req)




def error_page(req):
    if req.method == "GET":
        return render(req,"src/admin_login/admin_error.html",{})
    else:
        return send_bad_request(req)











# =======[ SHOW BLOGS ]============================================================================================
# @/admin/
def redirect_to_dashboard(req):
    if req.method == "GET":
        return redirect("/admin/dashboard/")
    else:
        return send_bad_request(req)




# @/admin/dashboard/
def dashboard(req):
    if req.method == "GET":
        return render(req,"src/admin_pages/dashboard.html",{
            "tab_title": "Dashboard: MyBlogs Admin",
            "page_title": "Admin Dashboard",
            "page_brief": "Manage your blogs from here",

            "blogs": api_read.get_blogs(),

            "admin": True
        })
    else:
        return send_bad_request(req)









# =======[ CREATE BLOG ]============================================================================================
# @/admin/create/
def redirect_to_create_blog_title(req):
    if req.method == "GET":
        return redirect("/admin/create/create-new/")
    else: 
        return send_bad_request(req)



# @/admin/create/create-new/
def create_page(req):   
    if req.method == "GET":
        return render(req,"src/admin_pages/create/header.html",{
            "admin": True
        })
    else:
        return send_bad_request(req)




# @/admin/create/add-blog/
def add_blog_body(req):
    if req.method == "POST":
        blog_title = req.POST.get("blog_title")
        thumbnail = req.FILES["blog_thumbnail"]
        
        if thumbnails.objects.filter(title=blog_title).exists():
            user = thumbnails.objects.filter(title=blog_title).first()
            user.image = thumbnail
            user.save()
            print("................ SUCCESS IN UPDATING")
                
        else: 
            thumbnails.objects.create(
                title = blog_title,
                image = thumbnail
            )
            print("................ SUCCESS IN ADDING")



        all_data = thumbnails.objects.filter(title=blog_title)

        for x in all_data:
            print("\n\n:::",x.title)
            print(":::",x.image,"\n\n")


        tag = req.POST.get("blog_tag")



        print("\n\n=======================> THUMBNAIL: ",thumbnail)

        return render(req,"src/admin_pages/create/body.html",{
            "blog_title": blog_title,
            "thumbnail": thumbnail,
            "tag": tag,
            "admin": True
        })


    else:
        return send_bad_request(req)






# @/admin/create/status/
def create_blog_status(req):
    if req.method == "POST":

        blog_title = req.POST.get("blog_title")
        thumbnail = req.POST.get("blog_thumbnail")
        tag = req.POST.get("blog_tag")

        header = req.POST.get("blog_intro")
        body = req.POST.get("blog_body")




        result = publish_new_blog({
            "title": blog_title,
            "tag": tag,
            "thumbnail": thumbnail,
            "header": header,
            "body": body
        })
        
        props = {
                "tab_title": "MyBlogs Admin",
                "title": "Blog could not be added",
                "subtitle": "Server error, try again later",
                "back_link": "/admin/create/create-new/",
                "back_name": "Go to Create page",
                "admin": True
            }



        if result:
            props = {
                "tab_title": "MyBlogs Admin",
                "title": "Blog created!",
                "subtitle": "A new blog, a new read!",
                "back_link": "/admin/dashboard/",
                "back_name": "Go to Dashboard",
                "admin": True
            }

        return render(req,"src/admin_pages/status.html",props)


    else:
        return send_bad_request(req)





# =======[ EDIT BLOG ]============================================================================================
# @/admin/edit/
def edit_page(req):
    if req.method == "GET":
        return render(req,"src/admin_pages/select.html",{
            "tab_title": "Edit Blog: MyBlogs Admin",
            "page_title": "Select a blog to edit",
            "page_brief": "Edited blogs will reflect on your page in 1-2 minutes",

            "blogs": api_read.get_blogs(),

            "form_action": "/admin/edit/select-edit/",

            "admin": True
        })
    else:
        return send_bad_request(req)






# @/admin/edit/select-edit/
def edit_this_blog(req):
    if req.method == "POST":
        blog = req.POST.get("blog_name")

        print("\n\n-----------> BLOG = ", blog)
        
        return render(req,"src/admin_pages/blog_category.html",{
            "blog_title": blog,
            "subtitle": "You can always come back to edit more later!",
            "admin": True
        })
    else: 
        return send_bad_request(req)









# @/admin/edit/header/
def edit_header(req):
    if req.method == "POST":
        blog = req.POST.get("blog_title")

        print("\n\n\n====> header:", blog)

        result = get_header_items(blog)
        
        return render(req,"src/admin_pages/blog_content/header.html",{
            "blog_title": blog,
            "title": blog,
            "thumbnail": result["thumbnail"],
            "tag": result["tag"],
            "admin": True
        })
    else: 
        return send_bad_request(req)
    





# @/admin/edit/header/status/
def edit_header_status(req):
    if req.method == "POST":
        blog = req.POST.get("blog_title")
        tag = req.POST.get("blog_tag")
        old_blog = req.POST.get("old_blog_title")


        thumbnail = req.FILES["blog_thumbnail"]

        if old_blog != blog:
            thumbnails.objects.create(
                title = blog,
                image = thumbnail
            )
        else:
            if thumbnails.objects.filter(title=blog).exists():
                user = thumbnails.objects.filter(title=blog).first()
                user.image = thumbnail
                user.save()
                print("................ SUCCESS IN UPDATING")

            else: 
                thumbnails.objects.create(
                    title = blog,
                    image = thumbnail
                )
                print("................ SUCCESS IN ADDING")



        all_data = thumbnails.objects.filter(title=blog)

        for x in all_data:
            print("\n\n:::",x.title)
            print(":::",x.image,"\n\n")




        result1 = update_blog_brief(title=blog,thumbnail="thumbnail",tag=tag,old_title=old_blog)
        result2 = True

        if old_blog != blog:
            result2 &= update_blog_title_everywhere(old_title=old_blog, new_title=blog)

        
        props = {
                "tab_title": "MyBlogs Admin",
                "title": "Could not update",
                "subtitle": "Server error, try again later",
                "back_link": "/admin/edit/",
                "back_name": "Go to Edit page",
                "blog_title": blog,
                "admin": True
            }



        if result1 & result2:
            props = {
                "tab_title": "MyBlogs Admin",
                "title": "Header updated successfully",
                "subtitle": "Headers are afterall, valuable at the forefront itself",
                "back_link": "/admin/dashboard/",
                "back_name": "Go to Dashboard",
                "blog_title": blog,
                "admin": True
            }

        return render(req,"src/admin_pages/status.html",props)

        
    else: 
        return send_bad_request(req)
    





# @/admin/edit/body/
def edit_body(req):
    if req.method == "POST":
        blog = req.POST.get("blog_title")

        print(f"\n\n=======> BLOG: {blog}")

        result = get_intro_body(blog)

        return render(req,"src/admin_pages/blog_content/body.html",{
            "blog_title": blog,
            "intro": result["header"].replace('"', "'"),
            "body": result["body"].replace('"', "'"),
            "admin": True
        })
    else: 
        return send_bad_request(req)
    






# @/admin/edit/body/status/
def edit_body_status(req):
    if req.method == "POST":
        blog = req.POST.get("blog_title")
        header = req.POST.get("blog_intro")
        body = req.POST.get("blog_body")

        result = update_blog_body(blog=blog,header=header,body=body)

        print(f"\n\n=======> BLOG: {blog}\n\n=======> HEADER: {header}\n\n=======> BODY: {body} ")
        
        props = {
                "tab_title": "MyBlogs Admin",
                "title": "Could not update",
                "subtitle": "Server error, try again later",
                "back_link": "/admin/edit/",
                "back_name": "Go to Edit page",
                "blog_title": blog,
                "admin": True
            }



        if result:
            props = {
                "tab_title": "MyBlogs Admin",
                "title": "Body updated successfully",
                "subtitle": "Body makes the meat of the blog, its importatnt to keep it sparkly",
                "back_link": "/admin/dashboard/",
                "back_name": "Go to Dashboard",
                "blog_title": blog,
                "admin": True
            }


        return render(req,"src/admin_pages/status.html",props)
    else: 
        return send_bad_request(req)









# =======[ DELETE BLOG ]============================================================================================
# @/admin/delete/
def delete_page(req):
    if req.method == "GET":
        return render(req,"src/admin_pages/select.html",{
            "tab_title": "Delete Blog: MyBlogs Admin",
            "page_title": "Select a blog to delete",
            "page_brief": "Deleted blogs will reflect on your page in 1-2 minutes",

            "blogs": api_read.get_blogs(),

            "form_action": "/admin/confirm-delete/",

            "admin": True
        })
    else:
        return send_bad_request(req)





# @/admin/confirm-delete/
def delete_this_blog(req):
    if req.method == "POST":
        blog = req.POST.get("blog_name")

        print("\n\n-----------> BLOG = ", blog)
        return render(req,"src/admin_pages/delete.html",{
            "blog_title": blog,
            "admin": True
        })
    else: 
        return send_bad_request(req)






# @/admin/delete-status/
def blog_delete(req):
    if req.method == "POST":
        blog = req.POST.get("blog_title")

        result = delete_blog(blog)

        props = {
                "tab_title": "MyBlogs Admin",
                "title": "Deletion unsuccessful",
                "subtitle": "Server error, try again later",
                "back_link": "/admin/delete/",
                "back_name": "Go to Delete page",
                "blog_title": blog,
                "admin": True
            }



        if result:
            props = {
                "tab_title": "MyBlogs Admin",
                "title": "Deleted successfully",
                "subtitle": "There's no concept of trash bin here as we don't believe in trash items",
                "back_link": "/admin/dashboard/",
                "back_name": "Go to Dashboard",
                "blog_title": blog,
                "admin": True
            }

        print("\n\n-----------> BLOG = ", blog)
        return render(req,"src/admin_pages/status.html",props)
    

    
    else: 
        return send_bad_request(req)





# =======[ COMMENT READ, DELETE ]============================================================================================
# @/admin/comment/
def comment_page(req):
    if req.method == "GET":
        return render(req,"src/admin_pages/select.html",{
            "tab_title": "See Comments: MyBlogs Admin",
            "page_title": "Select a blog to show its comments",
            "page_brief": "Comments are essential for the growth of any blog afterall",

            "blogs": api_read.get_blogs(),

            "form_action": "/admin/blog-comments/",

            "admin": True
        })
    else:
        return send_bad_request(req)



# @/admin/blog-comments/
def read_comment_blog(req):
    if req.method == "POST":
        blog = req.POST.get("blog_name")


        comments = get_blog_comments(blog)

        return render(req,"src/admin_pages/show_comments.html",{
            "comments": comments,
            "blog_title": blog,
            "link": "/admin/confirm-delete-comment/",

            "admin": True
        })
    
    else: 
        return send_bad_request(req)



# @/admin/confirm-delete-comment/
def delete_this_comment(req):
    if req.method == "POST":
        blog = req.POST.get("blog_name")
        name = req.POST.get("name")
        comment = req.POST.get("comment")



        return render(req,"src/admin_pages/delete_comment.html",{
            "blog_title": blog,
            "name": name,
            "comment": comment,
            "admin": True
        })
    else: 
        return send_bad_request(req)





# @/admin/delete-comment-status/
def comment_delete(req):
    if req.method == "POST":
        blog = req.POST.get("blog_title")
        name = req.POST.get("name")
        comment = req.POST.get("comment")

        result = do_comment_delete(blog=blog,name=name,comment=comment)


        props = {
                "tab_title": "MyBlogs Admin",
                "title": "Comment could not be deleted",
                "subtitle": "Server error, try again later",
                "back_link": "/admin/comments/",
                "back_name": "Go to Comments page",
                "admin": True
            }



        if result:
            props = {
                "tab_title": "MyBlogs Admin",
                "title": "Comment deleted",
                "subtitle": "More comments will be added in future, no worries",
                "back_link": "/admin/dashboard/",
                "back_name": "Go to Dashboard",
                "admin": True
            }


        return render(req,"src/admin_pages/status.html",props)
    
    else: 
        return send_bad_request(req)








# ===== error page =====================================

def send_bad_request(req):
    return render(req,"src/admin_error/error.html",{})
