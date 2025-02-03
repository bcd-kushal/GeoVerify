import os
import shutil
import time

from utils.clean_url import clean_url
from utils.shell_output import shell_output


# watchdog utils -------------------
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler



class FileHandler(FileSystemEventHandler):
    def on_created(self, event):
        if event.is_directory:
            return 
        elif event.src_path.endswith(".tmp"):
            return
        
        file_path = clean_url(event.src_path)
        shell_output({
            "title": "file added",
            "msg": file_path,
        })


    def on_moved(self, event):
        if event.is_directory:
            return 
        elif event.src_path.endswith(".tmp"):
            return
        
        file_path = clean_url(event.src_path)
        shell_output({
            "title": "file moved",
            "msg": file_path,
        })


    def on_deleted(self, event):
        if event.is_directory:
            return 
        elif event.src_path.endswith(".tmp"):
            return
        
        file_path = clean_url(event.src_path)
        shell_output({
            "title": "file deleted",
            "msg": file_path,
        })



if __name__ == "__main__":
    folder_to_watch = os.path.expanduser("~/Downloads/abc")

    event_handler = FileHandler()
    observer = Observer()

    observer.schedule(event_handler, folder_to_watch, recursive=False)

    try:
        print(f"Monitoring {folder_to_watch} for files...")
        observer.start()
        observer.join()
        time.sleep(1)

    except KeyboardInterrupt:
        observer.stop()
    observer.join()   

