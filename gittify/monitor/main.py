import getpass
import os
import ctypes
import subprocess

from utils import check_os
from .utils import check_service
from .install_service import execute_bot




def is_admin():
    try:
        return ctypes.windll.shell32.IsUserAnAdmin() != 0
    except:
        return False



def get_raw_command(PATH:str,COMMAND:str):
    return r"powershell -Command " + r'"Start-Process cmd -ArgumentList ' + r"'/k cd " + r"{0}".format(PATH) + r' && ' + r"{0}".format(COMMAND) + r"'" + r' -Verb RunAs"'




def main():

    # for security reasons, ask user to enter their access token once again here
    """ security_input = getpass.getpass("For security reasons, paste your GitHub access token here once again\nAccess token:")
    if not security_input==os.getenv('GITHUB_ACCESS_TOKEN'):
        print("Invalid access token given out...\n Exiting...\n")
        return """
    
    # check user OS type 
    os_type = check_os.check_os_type()

    if os_type=='windows':
        # change path to this folder
        curr_path = os.path.dirname(os.path.abspath(__file__))
        os.chdir(curr_path)
        
        SERVICE_INSTALL =   'python install.py install'
        SERVICE_REMOVE  =   'python install.py remove'
        SERVICE_START   =   'python install.py start'
        SERVICE_RESTART =   'python install.py restart'
        SERVICE_STOP    =   'python install.py stop'
        SERVICE_UPDATE  =   'python install.py update'

        RAW_ADMIN_INSTALL_COMMAND   =   get_raw_command(PATH=curr_path, COMMAND=SERVICE_INSTALL)
        RAW_ADMIN_REMOVE_COMMAND    =   get_raw_command(PATH=curr_path, COMMAND=SERVICE_REMOVE)
        RAW_ADMIN_START_COMMAND     =   get_raw_command(PATH=curr_path, COMMAND=SERVICE_START)
        RAW_ADMIN_RESTART_COMMAND   =   get_raw_command(PATH=curr_path, COMMAND=SERVICE_RESTART)
        RAW_ADMIN_STOP_COMMAND      =   get_raw_command(PATH=curr_path, COMMAND=SERVICE_STOP)


        # check if the service is already running or not
        # print(check_service.is_service_running("Gitty Monitor"))

        subprocess.run(RAW_ADMIN_INSTALL_COMMAND, shell=True, check=True) 
        # subprocess.run(RAW_ADMIN_REMOVE_COMMAND, shell=True, check=True) 
        # print("Gitty Monitor:",check_service.is_service_running("Gitty Monitor"))       
        # print("Gitty Monitoring Service:",check_service.is_service_running("Gitty Monitoring Service"))       




if __name__=='__main__':
    main()