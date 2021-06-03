#!/bin/sh

# current date
CURRENT_DATE=$(date '+%Y-%m-%d')

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
	node ~/code/stocklevelchecker/src/app >> ~/jav/jav.$CURRENT_DATE.log
	sudo ip link set enp7s0 mtu 1500
else
	echo "queue is not empty. exited."
fi
