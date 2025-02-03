from .check_os import check_os_type

def clean_url(unclean_url:str = ""):
     
    # The base example to such a type would be somthing like:
    # C:\Users\Kushal/Downloads/abc\compete-banner-bg-shade.svg

    # goal:   - make all backslashes into front-slashes
    #         - add single quotes wherever files/folders have spaces in between them

    

    if unclean_url == "" or unclean_url == None:
        return { "err": "malformed_url" }
    

    # file seperator check and OS compatibility --------------
    file_seperator = "\\"      #default file seperator
    
    os_type = check_os_type()

    if os_type == "windows":
        file_seperator = file_seperator
    elif os_type == "linux" or os_type == "macOS":
        file_seperator = "/"
    else:
        return { "err": "unknown OS type" }
    



    # convert all file seperators into such types --------------------
    clean_url = ""

    for i in range(0,len(unclean_url)):
        if unclean_url[i] == '/' or ord(unclean_url[i]) == 92:
           clean_url += file_seperator
        else:
            clean_url += unclean_url[i]


    return clean_url
    