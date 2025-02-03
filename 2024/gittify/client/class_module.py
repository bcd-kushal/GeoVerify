import requests
from datetime import datetime, timedelta

import warnings
warnings.filterwarnings("ignore")





class GithHubClient:
    def __init__(self, base_url, username, access_token):
        self.base_url = base_url
        self.username = username
        self.access_token = access_token
        self.headers = {
            "Authorization": f"Bearer {access_token}",
            "Accept": "application/vnd.github.v3+json"
        }

    def get_user_info(self, username:str=""):
        if username=="":
            username = self.username

        res = requests.get(f"{self.base_url}/users/{username}", headers=self.headers)
        return res.json()
    

    def get_user_repositories(self, username:str=""):
        if username=="":
            username = self.username

        endpoint = f"/users/{username}/repos"
        res = requests.get(f"{self.base_url}{endpoint}")
        return res.json()


    
    def get_todays_contributions(self, username:str=""):
        if username=="":
            username = self.username

        endpoint = f"/users/{username}/events"
        res = requests.get(f"{self.base_url}{endpoint}", headers=self.headers)

        if res.status_code == 200:
            events = res.json()
            today_date = (datetime.utcnow() - timedelta(days=1)).strftime("%Y-%m-%dT%H:%M:%SZ")
            pretty_today_date = (datetime.utcnow() - timedelta(days=1)).strftime("%d-%b")
            today_contributions = [ event['repo']['name'] for event in events if event["created_at"] >= today_date ]

            temp = []
            for i in range(0,len(today_contributions)):
                if today_contributions[i] in temp:
                    continue
                temp.append(today_contributions[i])

            today_contributions = temp

            return { "today": pretty_today_date, "total_contributions": len(today_contributions), "projects_contributed": today_contributions }
        
        
        else:
            return f"Failed to fetch data | Status: {res.status_code}"
    



    def get_daily_contributions(self, username:str=""):
        if username=="":
            username = self.username

        endpoint = f"/users/{username}/events"
        res = requests.get(f"{self.base_url}{endpoint}", headers=self.headers)

        if res.status_code == 200:
            contributions_per_day = {}
            projects_contributed = []
            events = res.json()

            for event in events:
                created_at = datetime.strptime(event["created_at"], "%Y-%m-%dT%H:%M:%SZ").strftime("%d-%b")
                contributions_per_day[created_at] = contributions_per_day.get(created_at, 0) + 1

                # if 'repo' in event and 'name' in event['repo']:
                #     projects_contributed.append(event['repo']['name'])

            return contributions_per_day
        
        else:
            return f"Failed to fetch data | Status: {res.status_code}"
    
