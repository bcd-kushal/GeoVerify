from django.contrib import admin
from django.urls import path, re_path
from django.conf import settings
from django.conf.urls.static import static

from app import views as app
from site_admin import views as adm
from site_admin import views as site_admin

urlpatterns = [
    path('dj-admin/', admin.site.urls),

    # NON-ADMIN =========================
    path('', app.homepage, name='homepage'),
    
    path('recents/', app.recents, name='recents'),
    
    path('subscribe/', app.subscribe, name='subscribe'),
    
    path('categories/', app.categories, name='all-categories'),
    path('categories/design/', app.design_blogs, name='design-categories'),
    path('categories/tech/', app.tech_blogs, name='tech-categories'),
    path('categories/life/', app.life_blogs, name='life-categories'),
    path('categories/profession/', app.profession_blogs, name='profession-categories'),
    path('categories/daily/', app.daily_blogs, name='daily-categories'),
    path('categories/community/', app.community_blogs, name='community-categories'),
    
    path('search/', app.search, name='search'),
    
    path('blog/<str:id>/', app.blog, name='blog'),
    
    
    # ADMIN =========================
    path('admin-login/', adm.admin_login, name='admin-login'),
    path('admin/logout/', adm.admin_logout, name='admin-logout'),
    path('error/', adm.error_page, name='login-error'),

    path('admin/', adm.redirect_to_dashboard, name='redirect-dashboard'),
    path('admin/dashboard/', adm.dashboard, name='dashboard'),


    path('admin/create/', adm.redirect_to_create_blog_title, name='redirect-create-title'),
    path('admin/create/create-new/', adm.create_page, name='create-header'),
    path('admin/create/add-blog/', adm.add_blog_body, name='create-body'),
    path('admin/create/status/', adm.create_blog_status, name='create-status'),


    path('admin/edit/', adm.edit_page, name='edit'),
    path('admin/edit/select-edit/', adm.edit_this_blog, name='edit-this-blog'),

    path('admin/edit/header/', adm.edit_header, name='edit-header'),
    path('admin/edit/header/status/', adm.edit_header_status, name='edit-header-status'),

    path('admin/edit/body/', adm.edit_body, name='edit-body'),
    path('admin/edit/body/status/', adm.edit_body_status, name='edit-body-status'),



    path('admin/delete/', adm.delete_page, name='delete'),
    path('admin/confirm-delete/', adm.delete_this_blog, name='delete-this-blog'),
    path('admin/delete-status/', adm.blog_delete, name='delete-status'),

    path('admin/comments/', adm.comment_page, name='comments'),
    path('admin/blog-comments/', adm.read_comment_blog, name='read-blog-comments'),
    path('admin/confirm-delete-comment/', adm.delete_this_comment, name='delete-this-comment'),
    path('admin/delete-comment-status/', adm.comment_delete, name='delete-comment-status'),



    # REST UNDEFINED PATTERNS
    re_path(r'^.*/$', app.send_bad_request, name='bad-route'),
]

urlpatterns += static(settings.MEDIA_URI,document_root=settings.MEDIA_ROOT)