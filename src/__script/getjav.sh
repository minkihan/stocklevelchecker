#!/bin/sh
date

DATETIME=$(date '+%Y-%m-%d')
cd /tr/99_log/jav/
echo "cd ~/jav/"

sftp -i ~/.ssh/id_rsa minkihan@$(cat /code/__script/__gcp3_ip) << %EOF%
cd log
get jav.$DATETIME.log
bye
%EOF%
echo "sftp get"

sort jav.$DATETIME.log | uniq > jav.$DATETIME.final.log
echo "sort and write final"

awk 'NR==FNR{a[$0];next}!($0 in a)' total.log jav.$DATETIME.final.log > current.log
sed 's/^/transmission-remote -n aya5:xkdlrj!2 -a /' current.log > current_execute
echo "write current"

./current_execute
echo "execute current"

cat *.final.log | sort | uniq > total.log
echo "write total"cd ja
echo ""
