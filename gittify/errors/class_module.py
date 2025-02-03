
import warnings
warnings.filterwarnings("ignore")

from utils.logs import *

from colors import initialize as decorator_init
beautifish = decorator_init.beautifish_initalize()


class Warning:
    def malformed_command(self,str:str):
        title = beautifish.red_text(f"[!] MALFORMED COMMAND:")
        msg = beautifish.yellow_text(f"'{str}' is not a command")
        footer = help_line()
        return f"\n{title}\n{msg}\n{footer}\n"
    
    def warning(self,str:str=""):
        title = beautifish.orange_text(f"[ WARNING ]")
        msg = beautifish.yellow_text(str)
        return f"\n{title}{msg}\n"
    
    def shell_exit(self):
        title = beautifish.purple_text(f"[^^] Thanks for using GITTY!!")
        msg = beautifish.pink_text(f"Use the service again later!")
        return f"\n\n{title}\n{msg}\n\n"