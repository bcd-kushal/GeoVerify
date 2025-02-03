import sys

def check_os_type():
    if sys.platform.startswith('win'):
        return "windows"
    
    if sys.platform.startswith('linux'):
        return "linux"
    
    if sys.platform.startswith('darwin'):
        return "macOS"
    
    return "unknown OS"