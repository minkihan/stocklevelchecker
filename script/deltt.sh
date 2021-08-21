#!/bin/sh
CURRENT_MONTH=$(date '+%Y-%m')
#cat jav*$CURRENT_MONTH*.final.log | sort | uniq > jav.$CURRENT_MONTH.final.log

DATETIME=$(date '+%Y-%m-%d' --date '-1 day')
rm /tr/99_log/jav/jav.$DATETIME.log
#rm /tr/99_log/jav/jav.$DATETIME.final.log

find /home/minkihan/jav/history_execute -empty -exec rm -rf {} \;