import logging
import win32serviceutil
import win32service
import win32event
import servicemanager
import os
import sys
import time


PACKAGE_PATH = os.path.dirname(os.path.abspath(__file__))
sys.path.append(PACKAGE_PATH)

from utils import check_os

# file to run as service ==================
from continuous_script import main as file_to_run  


class GittyMonitor(win32serviceutil.ServiceFramework):
    _svc_name_ = "ZZZ Gitty Monitoring Service"
    _svc_display_name_ = "ZZZ Gitty Monitor"

    def __init__(self, args):
        win32serviceutil.ServiceFramework.__init__(self, args)
        self.stop_event = win32event.CreateEvent(None, 0, 0, None)
        self.stop_requested = False

    
    @classmethod
    def set_service_names(cls, service_name, service_display_name):
        cls._svc_name_ = service_name
        cls._svc_display_name_ = service_display_name

    @classmethod
    def start_service(cls):
        try:
            evtsrc_dll = os.path.abspath(servicemanager.__file__)
            servicemanager.Initialize(cls._svc_name_, evtsrc_dll)
            servicemanager.PrepareToHostSingle(cls)
            servicemanager.StartServiceCtrlDispatcher()
        except Exception as desc:
            win32serviceutil.HandleCommandLine(cls)


    def SvcStop(self):
        self.ReportServiceStatus(win32service.SERVICE_STOP_PENDING)
        win32event.SetEvent(self.stop_event)
        self.stop_requested = True

        time.sleep(3)
        sys.exit(0)
        

    def SvcDoRun(self):
        self.ReportServiceStatus(win32service.SERVICE_START_PENDING)
        self.ReportServiceStatus(win32service.SERVICE_RUNNING)

        servicemanager.LogMsg(servicemanager.EVENTLOG_INFORMATION_TYPE,
                              servicemanager.PYS_SERVICE_STARTED,
                              (self._svc_name_, ''))
        
        while not self.stop_requested:
            print("JJK0")





if __name__ == '__main__':
    if "install" in sys.argv or "remove" in sys.argv:
        win32serviceutil.HandleCommandLine(GittyMonitor)
    else:
        GittyMonitor.start_service()