#!/usr/bin/env python
from requests import get
import urllib3

urllib3.disable_warnings()

response = get("https://api.instagram.com/v1/users/self/media/recent/?access_token=6363559180.e98b264.d1763cf8104c4840ba64d9226c2bc70c&count=6")
print(response.text)