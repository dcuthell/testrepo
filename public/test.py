#!/usr/bin/env python
from requests import get
import urllib3
import sys

urllib3.disable_warnings()

response = get("https://api.instagram.com/v1/users/self/media/recent/?access_token=" + sys.argv[1] + "&count=6")
print(response.text)