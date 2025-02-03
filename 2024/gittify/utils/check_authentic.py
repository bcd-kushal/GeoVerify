def check_data_authenticity(data:str):
    if ('message' in data and data['message']=='Not Found') or (data=='Failed to fetch data | Status: 404'):
        return False
    return True