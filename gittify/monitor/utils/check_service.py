import psutil
import os

def is_service_running(service_name:str):
    for process in psutil.process_iter(['pid', 'name']):
        print(f"{process.info['pid']}: {process.info['name'].lower()}")
        if process.info['name'].lower() == service_name.lower():
            return True
    return False


