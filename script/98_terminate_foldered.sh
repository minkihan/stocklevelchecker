#!/bin/sh

#ls -lh /tr/7_foldered/* | grep -e 7_foldered -e total
#ls -lh /tr/7_foldered/* | egrep '^total|(G)+$'
ls -lh /tr/7_foldered/* | egrep '^total(.)*G$'

export ynflag=1;
while true; do
    read -p "terminate all ? (YES:no): " yn
    case $yn in
        [Nn]* ) ynflag=0; break;;
        * ) break;;
        #* ) echo "input yes|no";;
    esac
done

if [ ${ynflag} -eq 1 ]
then
    sudo rm -rf /tr/7_foldered/*
    echo "terminated.";
else
    echo "exited.";
fi
