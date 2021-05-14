#!/bin/sh
date
DATETIME=$(date '+%Y-%m-%d')

cd /tr/99_log/jav/
sort jav.$DATETIME.log | uniq > jav.$DATETIME.final.log
awk 'NR==FNR{a[$0];next}!($0 in a)' total.log jav.$DATETIME.final.log > current.log
sed 's/^/transmission-remote -n aya5:xkdlrj!2 -a /' current.log > current_execute
./current_execute
cat *.final.log | sort | uniq > total.log
echo ""
