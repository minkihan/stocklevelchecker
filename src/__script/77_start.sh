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
	SET=$(seq 1 5)
	for i in $SET
	do
		node ~/code/stocklevelchecker/src/app ${i} >> ~/jav/jav.$CURRENT_DATE.log
	done
	sudo ip link set enp7s0 mtu 1500
else
	echo "queue is not empty. exited."
fi
