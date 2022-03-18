import json
import os
import pymongo
from dotenv import load_dotenv

load_dotenv()
DB_USER = os.getenv('DB_USER')
DB_PASS = os.getenv('DB_PASS')
DB_CLUSTER = os.getenv('DB_CLUSTER')
DB_DATABASE = os.getenv('DB_DATABASE')

client = pymongo.MongoClient(f'mongodb+srv://{DB_USER}:{DB_PASS}@{DB_CLUSTER}/{DB_DATABASE}?retryWrites=true&w=majority')
db = client[DB_DATABASE]

f = open('suggestions.txt','r')
suggestions_data = json.loads(f.read())
f.close()

for suggestion in suggestions_data:
  exists = db.suggestions.find_one({ 'search': suggestion["search"] })

  if not exists:
    result=db.suggestions.insert_one(suggestion)
    print(f'Created suggestion by id: {result.inserted_id}')
