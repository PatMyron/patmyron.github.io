import tinify
import requests
from requests.auth import HTTPBasicAuth

location = "../resume.png"

tinify.key = "ByxBoyxbDYigjBW61tWieDRIgblgDIE2"
source = tinify.from_file(location)
source = source.resize(
    method="fit",
    width=850,
    height=1100
)
for i in range(0,5):
	source.to_file(location)

zamzar_key = '1ba5713e2226e28f92e8e7a9ebb1e41673c23ba2'