#!/bin/sh

# current date
CURRENT_DATE=$(date '+%Y-%m-%d')
CURRENT_HOUR=$(date '+%Y-%m-%d-%H')

# pass flag
PASSFLAG=1
PASS=1

echo "---------------------------------------------------"
date

if pgrep -x Xvfb > /dev/null
then
    echo "Xvfb is running ..."
    xvfb=$(pgrep Xvfb)
    kill -9 $xvfb
    echo "process stop : Xvfb"
fi
#else 
    /usr/bin/Xvfb -ac :99 -screen 0 1280x1024x16 2>&1 &
    export DISPLAY=:99
    echo "process start : Xvfb"
#fi

node ~/coda/stocklevelchecker/src/app >> ~/coda/stocklevelchecker/log/jav.$CURRENT_DATE.log

xvfb=$(pgrep Xvfb)
kill -9 $xvfb
echo "process stop : Xvfb"

date