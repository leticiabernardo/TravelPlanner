import os
import re
import json
import ssl
from turtle import onclick
import requests
from requests.adapters import HTTPAdapter, Retry
from dotenv import load_dotenv
from bs4 import BeautifulSoup
from urllib.request import urlopen


load_dotenv()
lang="pt_BR"
SUGGESTIONS_URL = os.getenv('MELHORES_DESTINOS_URL')
GEOCODE_URL = os.getenv('GEOCODE_URL')
GEOCODE_KEY = os.getenv('GEOCODE_KEY')


def in_dictlist(key, value, my_dictlist):
    for entry in my_dictlist:
        if entry[key] == value:
            return entry
    return {}


def get_geocode(search):
    url = f'{GEOCODE_URL}?key={GEOCODE_KEY}&language={lang}'

    s = requests.Session()
    retries = Retry(total=5,
                    backoff_factor=0.1,
                    status_forcelist=[ 500, 502, 503, 504 ])
    s.mount('https://', HTTPAdapter(max_retries=retries))
    r = s.get(f'{url}&q={search}', timeout=30)

    geocode_data = r.json()
    if geocode_data and len(geocode_data["results"]) > 0:
        result = geocode_data["results"][0]
        response = {
            "search": search,
            "geometry": result["geometry"],
            "components": result["components"],
            "currency": result["annotations"]["currency"]
        }
        return response
    return


context = ssl._create_unverified_context()
page = urlopen(SUGGESTIONS_URL, context=context)
soup = BeautifulSoup(
    page.read().decode("utf-8"), 
    "html.parser"
)

boxDestinations = soup.find(class_ = "lista-box-destinos")
all_destinations = boxDestinations.findAll('div')

results = []
for destionation in all_destinations:
    onclickval = destionation.get('onclick')
    pattern = "'(.*)'"
    destination_link = ""

    if onclickval == None:
        continue

    if match := re.search(pattern, onclickval, re.IGNORECASE):
        destination_link = match.group(1)
    
    place_name = destionation.getText().strip()
    if place_name and not in_dictlist('search',place_name, results):
        print(place_name)
        geocode_data = get_geocode(place_name)
        if geocode_data:
            geocode_data["link"] = destination_link
            results.append(geocode_data)
        
if (len(results) > 0):
    with open('suggestions.txt', 'w', encoding='utf8') as f:
        f.write(json.dumps(results, ensure_ascii=False))
