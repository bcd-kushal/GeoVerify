import os
from keys import KEYS
from flask import Flask, request, jsonify

from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

ATLAS_URI = os.environ.get("ATLAS_URI")
app = Flask(__name__)


# ==[ cities ]========================>
@app.route("/cities",methods=['GET'])
def getCities():
    query_params = request.args
    queries = []
    args = []

    for [key,val] in query_params.items():
        if key.lower() in KEYS["CITIES"]:
            queries.append(key.lower())
            args.append(val)
    
    if(len(queries)==0):
        return jsonify({ "status": 400, "error": "No valid key passed" })

    FILTER = {}
    for i in range(0,len(queries)):
        FILTER[queries[i]] = { "$regex": str(args[i]), "$options": "i" }

    mongo_client = MongoClient(ATLAS_URI,server_api = ServerApi('1'))
    atlas_db = mongo_client.get_database("GeoVerify")
    cities = atlas_db.Cities
    data = cities.find(FILTER)

    res = []

    for doc in data:
        del doc['_id']
        res.append(doc)
        
    return jsonify(res)



# ==[ countries ]========================>
@app.route("/countries",methods=['GET'])
def getCountries():
    query_params = request.args
    queries = []
    args = []

    for [key,val] in query_params.items():
        if key.lower() in KEYS["COUNTRIES"]:
            queries.append(key)
            args.append(val)
    
    if(len(queries)==0):
        return jsonify({ "status": 400, "error": "No valid key passed" })

    FILTER = {}
    for i in range(0,len(queries)):
        FILTER[queries[i]] = { "$regex": str(args[i]), "$options": "i" }

    mongo_client = MongoClient(ATLAS_URI,server_api = ServerApi('1'))
    atlas_db = mongo_client.get_database("GeoVerify")
    cities = atlas_db.Countries
    data = cities.find(FILTER)

    res = []

    for doc in data:
        del doc['_id']
        res.append(doc)
        
    return jsonify(res)


# ==[ regions ]========================>
@app.route("/regions",methods=['GET'])
def getRegions():
    query_params = request.args
    queries = []
    args = []

    for [key,val] in query_params.items():
        if key.lower() in KEYS["REGIONS"]:
            queries.append(key)
            args.append(val)
    
    if(len(queries)==0):
        return jsonify({ "status": 400, "error": "No valid key passed" })

    FILTER = {}
    for i in range(0,len(queries)):
        FILTER[queries[i]] = { "$regex": str(args[i]), "$options": "i" }

    mongo_client = MongoClient(ATLAS_URI,server_api = ServerApi('1'))
    atlas_db = mongo_client.get_database("GeoVerify")
    cities = atlas_db.Regions
    data = cities.find(FILTER)

    res = []

    for doc in data:
        del doc['_id']
        res.append(doc)
        
    return jsonify(res)


# ==[ states ]========================>
@app.route("/states",methods=['GET'])
def getStates():
    query_params = request.args
    queries = []
    args = []

    for [key,val] in query_params.items():
        if key.lower() in KEYS["STATES"]:
            queries.append(key)
            args.append(val)
    
    if(len(queries)==0):
        return jsonify({ "status": 400, "error": "No valid key passed" })

    FILTER = {}
    for i in range(0,len(queries)):
        FILTER[queries[i]] = { "$regex": str(args[i]), "$options": "i" }

    mongo_client = MongoClient(ATLAS_URI,server_api = ServerApi('1'))
    atlas_db = mongo_client.get_database("GeoVerify")
    cities = atlas_db.States
    data = cities.find(FILTER)

    res = []

    for doc in data:
        del doc['_id']
        res.append(doc)
        
    return jsonify(res)


# ==[ subregions ]========================>
@app.route("/subregions",methods=['GET'])
def getSubregions():
    query_params = request.args
    queries = []
    args = []

    for [key,val] in query_params.items():
        if key.lower() in KEYS["SUBREGIONS"]:
            queries.append(key)
            args.append(val)
    
    if(len(queries)==0):
        return jsonify({ "status": 400, "error": "No valid key passed" })

    FILTER = {}
    for i in range(0,len(queries)):
        FILTER[queries[i]] = { "$regex": str(args[i]), "$options": "i" }

    mongo_client = MongoClient(ATLAS_URI,server_api = ServerApi('1'))
    atlas_db = mongo_client.get_database("GeoVerify")
    cities = atlas_db.Subregions
    data = cities.find(FILTER)

    res = []

    for doc in data:
        del doc['_id']
        res.append(doc)
        
    return jsonify(res)


# ==[ rest ]========================>
@app.route("/help",methods=['GET'])
def show_syntax():
    return jsonify(KEYS)


# ==[ rest ]========================>
@app.route("/",methods=['GET'])
def throwError():
    return jsonify({ "status": 400, "error": "Incorrect route defined" })


# ==[ procfile ]========================>
if __name__=="__main__":
    app.run(debug=True)