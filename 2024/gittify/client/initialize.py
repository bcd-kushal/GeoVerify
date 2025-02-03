import os
import dotenv

import client.class_module as client

dotenv.load_dotenv()

API = os.getenv('GITHUB_API')
USERNAME = os.getenv('GITHUB_USERNAME')
ACCESS_TOKEN = os.getenv('GITHUB_ACCESS_TOKEN')

github_client = client.GithHubClient(username=USERNAME, access_token=ACCESS_TOKEN, base_url=API)

def gitty_initialize():
    return github_client