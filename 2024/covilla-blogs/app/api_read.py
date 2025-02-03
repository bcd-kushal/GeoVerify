from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from site_admin.models import *

import re

ATLAS_URI = "mongodb+srv://naveen:Z7RHvWPN4orjL74y@edtech.qdjcop3.mongodb.net/?retryWrites=true&w=majority"


#==================================================================
#==================================================================




def get_blogs(type:str=None):

    mongo_client = MongoClient(ATLAS_URI,server_api = ServerApi('1'))
    
    atlas_db = mongo_client.get_database("blogs")
    data = atlas_db.blog_brief

    result = []

    if type:
        blogs = data.find({ "tag": type }).limit(25)
    else:
        blogs = data.find({ "tag": { "$exists": True } }).sort({ "_id": -1 }).limit(25)



    for blog in blogs:
        name = blog["title"]
        
        
        if thumbnails.objects.filter(title=name).exists():
            user = thumbnails.objects.filter(title=name).first()
            print("\n\n------------------------ IMAGE IS ----------------------------    ",user.image)
            blog["thumbnail"] = user.image

        result.append({
            "title": blog["title"],
            "thumbnail": blog["thumbnail"],
            "tag": blog["tag"],
            "tag_link": blog["tag_link"],
            "date": blog["date"],
            "comments": blog["comments"],
            "link": blog["link"],
            "brief": blog["brief"]
        })


    return result









def get_searched_blogs(search_word:str=None):

    keywords = search_word.split()
    
    mongo_client = MongoClient(ATLAS_URI,server_api = ServerApi('1'))
    
    atlas_db = mongo_client.get_database("blogs")
    data = atlas_db.blog_brief

    result = []

    for keyword in keywords:
        blogs = data.find({ "title": { "$regex": keyword, "$options": "i" } }).limit(15)
        for blog in blogs:
            
            name = blog["title"]
            if thumbnails.objects.filter(title=name).exists():
                user = thumbnails.objects.filter(title=name).first()
                print("\n\n------------------------ IMAGE IS ----------------------------    ",user.image)
                blog["thumbnail"] = user.image


            result.append({
                "title": blog["title"],
                "thumbnail": blog["thumbnail"],
                "tag": blog["tag"],
                "tag_link": blog["tag_link"],
                "date": blog["date"],
                "comments": blog["comments"],
                "link": blog["link"],
                "brief": blog["brief"]
            })


    return result









def get_recent_blog_titles():
    
    
    mongo_client = MongoClient(ATLAS_URI,server_api = ServerApi('1'))
    
    atlas_db = mongo_client.get_database("blogs")
    data = atlas_db.blog_brief

    blogs = data.find({ "title": { "$exists": True } }).sort({ "_id": -1 }).limit(3)




    recents = []

    for blog in blogs:

        name = blog["title"]
        if thumbnails.objects.filter(title=name).exists():
                user = thumbnails.objects.filter(title=name).first()
                print("\n\n------------------------ IMAGE IS ----------------------------    ",user.image)
                blog["thumbnail"] = user.image



        recents.append({
            "title": blog["title"],
            "thumbnail": blog["thumbnail"],
            "tag": blog["tag"],
            "tag_link": blog["tag_link"],
            "date": blog["date"],
            "comments": blog["comments"],
            "link": blog["link"],
            "brief": blog["brief"]
        })
    
    return recents







def get_site_stats():
    
    
    mongo_client = MongoClient(ATLAS_URI,server_api = ServerApi('1'))
    
    atlas_db = mongo_client.get_database("blogs")
    data = atlas_db.statistics

    stats = data.find_one({ "total_blogs": { "$exists": True } })

    
    return [
        {
            "data": stats["total_blogs"],
            "for": "Total blogs"
        },
        {
            "data": stats["total_viewers"],
            "for": "Total viewers"
        },
        {
            "data": stats["total_comments"],
            "for": "Total comments"
        }
    ]








def get_whole_blog(id:str):
    
    mongo_client = MongoClient(ATLAS_URI,server_api = ServerApi('1'))
    
    atlas_db = mongo_client.get_database("blogs")
    data = atlas_db.blog

    blog = data.find_one({ "title": { "$regex": re.compile( id , re.IGNORECASE ) } })

    title       =   blog["title"]
    date        =   blog["date"]
    author      =   blog["author"]
    thumbnail   =   blog["thumbnail"]
    tag         =   blog["tag"]
    header      =   blog["header"]
    contents    =   blog["contents"]
    body        =   blog["body"]
            


    name = blog["title"]
    if thumbnails.objects.filter(title=name).exists():
        user = thumbnails.objects.filter(title=name).first()
        print("\n\n------------------------ IMAGE IS ----------------------------    ",user.image)
        blog["thumbnail"] = user.image


    thumbnail   =   blog["thumbnail"]




    body2 = """ 
    <h2><span id="what-is-slidesai">What is SlidesAI?</span></h2>
                            <p>
                                SlidesAI, an AI-powered tool, simplifies creating entire slide
                                presentations for business or personal use. Currently, it’s available as a Google Slides
                                extension, with upcoming support for Microsoft PowerPoint. After installing the
                                extension, it enhances Google Slides with various AI tools, streamlining the creation
                                process. You can generate a complete presentation in seconds using simple prompts based
                                on your text or topic of interest. SlidesAI includes AI tools for customizing each slide
                                with AI-generated content, images, and designs. It automatically inserts citations,
                                summarizes content, paraphrases sentences, and offers much more. Additionally, its
                                support for over 100 languages enhances its versatility.
                            </p>
                            <h2><span id="how-does-slidesai-work">How does SlidesAI work?</span></h2>
                            <p><a>SlidesAI</a> leverages artificial intelligence to generate
                                presentations from user input. Users provide a topic or prompt, and the tool creates an
                                outline and content suggestions. Users then customize these to their preferences. Here
                                are the steps involved in using this tool:
                            </p>
                            <ol>
                                <li><strong>Install the Google Slides extension:</strong> Start by opening Google Slides
                                    and creating a new presentation. Access the extension by selecting “Extensions” from
                                    the top menu, choosing “Add-ons,” and then “Get add-ons.” Search for “SlidesAI” in
                                    the Google Workspace Marketplace and install the add-on.</li>
                            
                                <li><strong>Open the SlidesAI add-on:</strong> Return to your Google Slides
                                    presentation, click “Extensions,” and select “SlidesAI.” Choose “Generate Slides.”
                                    Optionally, use “Magic Write” to enhance your slides after generation.</li>
                                <li><strong>Provide instructions to SlidesAI:</strong> You’ll find two sections in the
                                    pop-up window. In the “Text” section, input your instructions or content. In the
                                    “Themes” section, customize your presentation’s appearance.</li>
                                <li><strong>Edit your presentation:</strong> After SlidesAI generates it, close the
                                    pop-up and refine it within Google Slides.</li>
                            </ol>
                            <p>Users can download their final presentation as a PowerPoint file or share it online.</p>
                            <h2><span id="ease-of-use-user-interface">Ease of Use &amp; User Interface</span></h2>
                            
                            <p>SlidesAI stands out for its user-friendly interface, even for those new to creating
                                presentations. Its intuitive layout and well-organized features make navigation
                                effortless. The toolbar at the top provides easy access to all necessary features. The
                                canvas, central to the screen, is where users add content. Additionally, SlidesAI offers
                                various keyboard shortcuts to expedite the creation process. For instance, pressing
                                “Ctrl” + “Enter” creates a new slide, while “Ctrl” + “A” selects all content on a slide.
                            </p>
                            <h2><span id="features-of-slidesai">Features of SlidesAI</span></h2>
                            <p>SlidesAI offers innovative features that have transformed the way presentations are made.
                                These features not only enhance efficiency but also impact the delivery of slideshows.
                                Let’s delve into how these functionalities enable users to craft compelling
                                presentations.
                            </p>
                            <h3><span id="1-ai-generated-text">1. AI-generated text</span></h3>
                            <p>With SlidesAI’s AI-generated text, users can quickly generate presentation content. By
                                entering a topic or prompt, the AI provides content suggestions. Users have the freedom
                                to edit and</p>
                            <p>tailor this content. They can enrich their presentations by adding information related to
                                their topic.</p>
                           
                            <p>For instance, I inputted text about online shopping, opting for a title, a thank you
                                slide, images, and four slides. Additional information specified the inclusion of a
                                slide on payment methods.</p>
                            
                            <p>This is just a basic example. You can tailor the outline and content to meet specific
                                needs, add more slides, or cover different aspects of online shopping.</p>
                            
                            <p>This feature is a significant time-saver and a source of new presentation ideas. It’s
                                particularly useful for those unsure where to start with their presentation.</p>
                            <h3><span id="2-ai-generated-themes">2. AI-generated themes</span></h3>
                            <p>SlidesAI themes help create visually appealing, professional, and consistent
                                presentations. Themes include pre-defined color palettes, fonts, and layouts, applied
                                with a single click. The themes provided are:</p>
                            <ul>
                                <li>Modern Monochrome</li>
                                <li>Modern Monochrome Dark</li>
                                <li>Simple Contrast Light</li>
                                <li>Simple Contrast Dark</li>
                                <li>Sleek Elegance</li>
                                <li>Blue Opulence</li>
                            </ul>
                            
                            <p>Users can customize these themes to suit their specific needs. To do this, click the
                                “Custom” button in the themes section. You can then modify the theme’s colors, fonts,
                                and layouts. In my case, I selected “League Spartan” for the title font, adjusted the
                                font size to 24, and chose a black color. Similarly, I set the body font, size, and
                                color and selected background color for the layout.</p>
                            
                            <h3><span id="3-ai-powered-slide-creation">3. AI-Powered Slide Creation</span></h3>
                            <p>The “Create” feature in SlidesAI facilitates the creation of new slides. Offering various
                                layouts, the feature is accessible via the “Create Slide” button in the toolbar. Select
                                your preferred layout, and SlidesAI will create a new slide. Layout options include
                                one-column, two-column, and three-column designs.</p>
                            
                            <p>In my case, I titled the slide “Ecommerce” and provided related text. I chose the “All AI
                                Powered Design” layout, which resulted in the following outline.</p>
                            
                            <p>Users can tailor the layout by adding or removing text boxes, images, and other design
                                elements. They can also adjust font size, color, and text placement.</p>
                            <h3><span id="4-remix-slides">4. Remix Slides</span></h3>
                            <p>The “Remix” feature in SlidesAI provides a fast and efficient way to refresh slide
                                layouts and text. Users can choose from different layout options, each offering a unique
                                text and visual arrangement. They need to supply their slides’ core content or message,
                                and SlidesAI reorganizes it into the selected layout.</p>
                            
                            <p>This feature is handy for updating slide designs efficiently and maintaining the message
                                while enhancing visual appeal.</p>
                            <h3><span id="5-magic-write">5. Magic Write</span></h3>
                            <p>Magic Write in SlidesAI offers tools for sentence rephrasing, tone and language
                                alteration, and image searching. It also suggests improvements to enhance slide
                                readability and engagement. Its capabilities include:</p>
                            <ul>
                                <li>Paraphrasing sentences for better clarity and engagement.</li>
                                <li>Finding relevant images to enhance visual appeal.</li>
                                <li>Searching for icons to add visual interest or communicate complex concepts.</li>
                                <li>Locating and inserting citations to credit sources and avoid plagiarism.</li>
                                <li>Adding AI-generated emojis for more engaging and visually appealing slides.</li>
                                <li>Gathering user feedback to improve the Magic Write feature.</li>
                            </ul>
                            
                            <p>For example, I changed “Integration of augmented reality in online shopping” to
                                “Incorporating augmented reality into online shopping.”</p>
                            <h3><span id="6-history">6. History</span></h3>
                            <p>The History feature in SlidesAI tracks all changes made to slides over time. Users can
                                view and revert to previous versions if needed.</p>
                            
                            <h2><span id="pros-and-cons-of-slidesai">Pros and Cons of SlidesAI</span></h2>
                            <p>SlidesAI is notable for its innovative features, yet it has both strengths and
                                limitations:</p>
                            <h3><span id="pros">Pros</span></h3>
                            <ul>
                                <li>Streamlines presentation creation, enhancing accessibility and speed.</li>
                                <li>Enables users to customize their slides creatively.</li>
                                <li>Facilitates collaborative project work.</li>
                                <li>Ensures uniformity across slides, aiding team cohesion.</li>
                            </ul>
                            <h3><span id="cons">Cons</span></h3>
                            <ul>
                                <li>May result in generic content and visuals due to creative limitations.</li>
                                <li>Complex data might be inaccurately represented, requiring additional verification.
                                </li>
                                <li>Depends on a stable internet connection, which can be problematic in crucial
                                    situations.</li>
                                <li>Potential for less responsive customer support.</li>
                            </ul>
                            <h2><span id="slidesai-pricing-and-plans-review">SlidesAI Pricing and Plans Review</span>
                            </h2>
                            
                            <p>The <strong>Basic Plan</strong> allows three presentations per month. It includes up to
                                2500 character input per presentation, 10 AI credits, and one monthly video export.</p>
                            <p>The <strong>Pro Plan</strong> is $8/user/month ($80/user/year). This plan offers ten
                                presentations per month, up to 6000 character input per presentation, 100 AI credits,
                                and 10 video exports per month.</p>
                            <p>The <strong>Premium Plan</strong> costs $15/user/month ($150/user/year). It provides
                                unlimited presentations, up to 12000 character input per presentation, 250 AI credits,
                                and 20 video exports per month.</p>
                            <h2><span id="alternatives-to-slidesai">Alternatives to SlidesAI</span></h2>
                            <p>SlidesAI has transformed the process of creating visually captivating slideshows.
                                However, several alternatives offer unique features and benefits, allowing professionals
                                to find the best fit for their needs. Here are notable alternatives to SlidesAI:</p>
                            <h3><span id="1-microsoft-powerpoint-copilot">1. Microsoft PowerPoint + Copilot</span></h3>
                            <p>The <a>new Microsoft 365 suite</a> has been infused
                                with Copilot, Microsoft’s AI-powered assistant for their most popular productivity
                                software. This includes PowerPoint, the popular software widely used for creating and
                                delivering slideshow presentations with text, images, videos, and other multimedia. It’s
                                a solid alternative to SlidesAI, primarily due to the built-in AI featured in Copilot
                                and its extensive user base and compatibility across Windows, macOS, iOS, and Android.
                                This facilitates seamless collaboration and sharing.</p>
                            <h3><span id="2-prezi">2. Prezi</span></h3>
                            <p><a>Prezi</a>, a cloud-based
                                presentation software, allows users to create and present in a dynamic, non-linear
                                fashion. Unlike traditional slide-by-slide presentations, Prezi uses a canvas approach,
                                enabling zoom-in and zoom-out capabilities for a more engaging presentation. It stands
                                out as an alternative to SlidesAI with its unique style, offering more creativity and
                                design flexibility than SlidesAI’s quick and straightforward approach.</p>
                            <h3><span id="3-tome">3. Tome</span></h3>
                            <p><a>Tome</a> is an AI-powered
                                storytelling and presentation tool designed to quickly and easily create immersive
                                narratives. It’s versatile, allowing the creation of presentations, one-pagers,
                                microsites, and more. Tome is an excellent alternative to SlidesAI, offering a more
                                AI-driven, narrative-focused approach. It enables users to craft creative presentations
                                with AI-generated text and images, themed templates, and animations.</p>
                            <h2><span id="conclusion">Conclusion</span></h2>
                            <p><a>SlidesAI</a> proves to be a valuable tool for crafting attractive
                                slides, compatible with Google Slides and Microsoft PowerPoint. It streamlines slide
                                creation, adds a personal touch to presentations, and fosters collaboration. However,
                                users should be aware of its limitations, such as reduced creative control and potential
                                data interpretation errors. Understanding SlidesAI’s capabilities is crucial to ensure
                                it aligns with your presentation objectives. While SlidesAI is a valuable asset for
                                presenters, it requires a skillful human touch for optimal results.</p>
    """


    return {
        "title": title,
        "date": date,
        "author": author,
        "thumbnail": thumbnail,
        "tag": tag,
        "header": header,
        "contents": contents,
        "body": body
    }






def get_more_blogs(tag):
    
    mongo_client = MongoClient(ATLAS_URI,server_api = ServerApi('1'))
    
    atlas_db = mongo_client.get_database("blogs")
    data = atlas_db.blog_brief

    blogs = data.find({ "tag": tag }).limit(6)



    more_blogs = []

    for blog in blogs:
        name = blog["title"]
        if thumbnails.objects.filter(title=name).exists():
            user = thumbnails.objects.filter(title=name).first()
            print("\n\n------------------------ IMAGE IS ----------------------------    ",user.image)
            blog["thumbnail"] = user.image

        more_blogs.append({
            "title": blog["title"],
            "thumbnail": blog["thumbnail"],
            "tag": blog["tag"],
            "tag_link": blog["tag_link"],
            "date": blog["date"],
            "comments": blog["comments"],
            "link": blog["link"],
            "brief": blog["brief"]
        })


    return more_blogs






def get_blog_comments(blog:str=None):
    if blog=="" or blog==None:
        return None
    
    mongo_client = MongoClient(ATLAS_URI,server_api = ServerApi('1'))
    
    atlas_db = mongo_client.get_database("blogs")
    data = atlas_db.comments

    comments = data.find_one({ "title": { "$regex": re.compile( blog , re.IGNORECASE ) } })

    print("\n\n",comments,"\n\n")

    comments = comments["comments"]

    if len(comments) == 0:
        return []
    else:
        return comments
