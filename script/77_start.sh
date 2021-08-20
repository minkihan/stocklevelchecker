#!/bin/sh

# current date
CURRENT_DATE=$(date '+%Y-%m-%d')
CURRENT_HOUR=$(date '+%Y-%m-%d-%H')

# pass flag
PASSFLAG=1
PASS=1

echo "---------------------------------------------------"
date
/usr/bin/Xvfb -ac :99 -screen 0 1280x1024x16 &
export DISPLAY=:99
node ~/coda/stocklevelchecker/src/app >> ~/coda/stocklevelchecker/log/jav.$CURRENT_DATE.log
date