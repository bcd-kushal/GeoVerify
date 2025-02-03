from datetime import datetime

def current_time():
    TIME_FORMAT = "%d %b, %H:%M"

    present_time = datetime.now()
    formatted_time = present_time.strftime(TIME_FORMAT)

    return formatted_time



class Color: 
    RED = '\033[91m'
    GREEN = '\033[92m'
    YELLOW = '\033[93m'
    BLUE = '\033[94m'
    END = '\033[0m'


# ====================================================================
# ====================================================================
    

def shell_output(data):
    if data["title"] == "file added":
        print(f'{Color.YELLOW}[{current_time()}]{Color.END} {Color.GREEN}{data["title"]}:{Color.END} {data["msg"]}')
    
    if data["title"] == "file moved":
        print(f'{Color.YELLOW}[{current_time()}]{Color.END} {Color.BLUE}{data["title"]}:{Color.END} {data["msg"]}')
    
    if data["title"] == "file deleted":
        print(f'{Color.YELLOW}[{current_time()}]{Color.END} {Color.RED}{data["title"]}:{Color.END} {data["msg"]}')
    
