import os
import dotenv
from colors import initialize as beautifish_init
from .shell_icons import *

beautifish = beautifish_init.beautifish_initalize()

dotenv.load_dotenv()

def template_no_such_username():
    title = beautifish.gray_text(f"[{CROSS}] Oops...")
    data = beautifish.gray_text(f"No such GitHub username exists")
    return f"\n{title}\n{data}\n"


def template_good_response(command:str,username:str):
    if username=="":
        username = os.getenv('GITHUB_USERNAME')
    return f"  {DOT} {beautifish.cyan_text('command:')} {command}\n  {DOT} {beautifish.cyan_text('username:')} {username}\n  {DOT} {beautifish.cyan_text('data:')} "