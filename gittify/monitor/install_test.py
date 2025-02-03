import os
import sys
import win32serviceutil
import win32service
import win32event
import servicemanager

class MyService(win32serviceutil.ServiceFramework):
    _svc_name_ = "ZZZ_MyService"
    _svc_display_name_ = "ZZZ_My Service"

    def __init__(self, args):
        win32serviceutil.ServiceFramework.__init__(self, args)
        self.hWaitStop = win32event.CreateEvent(None, 0, 0, None)
        self.running = True

    def SvcStop(self):
        self.ReportServiceStatus(win32service.SERVICE_STOP_PENDING)
        win32event.SetEvent(self.hWaitStop)
        self.running = False

    def SvcDoRun(self):
        servicemanager.LogMsg(servicemanager.EVENTLOG_INFORMATION_TYPE, servicemanager.PYS_SERVICE_STARTED, (self._svc_name_, ''))
        self.main()

    def main(self):
        while self.running:
            print("90909")
        pass



def install_service():
    try:
        win32serviceutil.InstallService(
            None, "ZZZ_MyService", "ZZZ_My Service", description="This is a sample service.")
        print("Service installed successfully.")
    except Exception as e:
        print(f"Failed to install service: {e}")

def remove_service():
    try:
        win32serviceutil.RemoveService("ZZZ_MyService")
        print("Service removed successfully.")
    except Exception as e:
        print(f"Failed to remove service: {e}")

def main():
    if len(sys.argv) != 2:
        print("Usage: python install_test.py <install/remove>")
        return

    command = sys.argv[1]

    if command == 'install':
        install_service()
    elif command == 'remove':
        remove_service()
    else:
        print("Invalid command:", command)

if __name__ == "__main__":
    main()