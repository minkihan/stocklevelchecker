#!/bin/sh

# current date
CURRENT_DATE=$(date '+%Y-%m-%d')
CURRENT_HOUR=$(date '+%Y-%m-%d-%H')

# pass flag
PASSFLAG=1
PASS=1

echo "---------------------------------------------------"
date

if [ "$(ls -A /tr/1_progress/)" ] 
then
	PASS=0
fi
if [ ${PASSFLAG} -gt 0 ]
then
	PASS=1
fi

if [ ${PASS} -gt 0 ]
then
	sudo ip link set enp7s0 mtu 400
	if [ "$1" = "test" ];
	then
        echo "test"
		/usr/local/bin/node ~/code/stocklevelchecker/src/app
	else 
        echo "real"
		/usr/local/bin/node ~/code/stocklevelchecker/src/app >> ~/jav/jav.$CURRENT_DATE.log
        sort ~/jav/jav.$CURRENT_DATE.log | uniq > ~/jav/jav.$CURRENT_DATE.final.log
        awk 'NR==FNR{a[$0];next}!($0 in a)' ~/jav/total.log ~/jav/jav.$CURRENT_DATE.final.log > ~/jav/current.log
        sed 's/^/transmission-remote -n aya5:!L_wHRO_OStSa=0w -a /' ~/jav/current.log > ~/jav/current_execute
        cp ~/jav/current_execute ~/jav/history_execute/current_execute.$CURRENT_HOUR
        ~/jav/current_execute
        cat ~/jav/*.final.log | sort | uniq > ~/jav/total.log
	fi
	sudo ip link set enp7s0 mtu 1500
else
	echo "queue is not empty. exited."
fi

date
