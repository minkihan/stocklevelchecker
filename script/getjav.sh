#!/bin/sh
date

DATETIME=$(date '+%Y-%m-%d')
CURRENT_HOUR=$(date '+%Y-%m-%d-%H')
cd /tr/99_log/jav/
echo "cd ~/jav/"

sftp -i ~/.ssh/id_rsa -P 2275 minkihan@$(cat /code/stocklevelchecker/script/coda-vm-linux) << %EOF%
cd /home/minkihan/coda/stocklevelchecker/log
get jav.$DATETIME.log
bye
%EOF%
echo "sftp get"

sort jav.$DATETIME.log | uniq > jav.$DATETIME.final.log
echo "sort and write final"

awk 'NR==FNR{a[$0];next}!($0 in a)' total.log jav.$DATETIME.final.log > current.log
sed 's/^/transmission-remote -n aya5:!L_wHRO_OStSa=0w -a /' current.log > current_execute
echo "write current"

cp ~/jav/current_execute ~/jav/history_execute/current_execute.$CURRENT_HOUR
./current_execute
echo "execute current"

cat *.final.log | sort | uniq > total.log
echo "write total"
echo ""
