import win32serviceutil
import win32service
import win32event
import servicemanager
import socket
import os
import sys

""" 
PACKAGE_PATH = os.path.dirname(os.path.abspath(__file__))
sys.path.append(PACKAGE_PATH)

from utils import check_os

# file to run eternally ==================
from continuous_script import main as file_to_run  

 """

class EternalService(win32serviceutil.ServiceFramework):
    _svc_name_ = "Eternal Service"
    _svc_display_name_ = "Gitty Perma Service"

    def __init__(self, args):
        win32serviceutil.ServiceFramework.__init__(self, args)
        self.hWaitStop = win32event.CreateEvent(None, 0, 0, None)
        socket.setdefaulttimeout(120)
        self.is_alive = True

    def SvcStop(self):
        self.ReportServiceStatus(win32service.SERVICE_STOP_PENDING)
        win32event.SetEvent(self.hWaitStop)
        self.is_alive = False

    def SvcDoRun(self):
        servicemanager.LogMsg(servicemanager.EVENTLOG_INFORMATION_TYPE,
                              servicemanager.PYS_SERVICE_STARTED,
                              (self._svc_name_, ''))
        self.main()

    def main(self):
        print ("OP")




def execute_bot():

    """ # for security reasons, ask user to enter their access token once again here
    security_input = getpass.getpass("For security reasons, paste your GitHub access token here once again\nAccess token:")
    if not security_input==os.getenv('GITHUB_ACCESS_TOKEN'):
        print("Invalid access token given out...\n Exiting...\n")
        return
    
    # check user OS type 
    os_type = check_os.check_os_type()
    if os_type=='windows': """
    if ('install' in sys.argv) or ('remove' in sys.argv):
        print("HERE-----------------1")
        servicemanager.Initialize()
        servicemanager.PrepareToHostSingle(EternalService)
        servicemanager.StartServiceCtrlDispatcher()
    else:
        print("HERE-----------------2")
        win32serviceutil.HandleCommandLine(EternalService)



if __name__=='__main__':
    execute_bot()