#!/bin/sh
date
DATETIME=$(date '+%Y-%m-%d')
DATETIME2=$(date '+%Y-%m-%d-%H')

cd /tr/99_log/jav/
sort jav.$DATETIME.log | uniq > jav.$DATETIME.final.log
awk 'NR==FNR{a[$0];next}!($0 in a)' total.log jav.$DATETIME.final.log > current.log
sed 's/^/transmission-remote -n aya5:xkdlrj!2 -a /' current.log > current_execute
cp current_execute /tr/99_log/jav/history_execute/current_execute.$DATETIME2
./current_execute
cat *.final.log | sort | uniq > total.log
echo ""
