#!/bin/sh

export COLOR_NONE='\e[0m'
export COLOR_BLACK='\e[0;30m'
export COLOR_GRAY='\e[1;30m'
export COLOR_RED='\e[0;31m'
export COLOR_LIGHT_RED='\e[1;31m'
export COLOR_GREEN='\e[0;32m'
export COLOR_LIGHT_GREEN='\e[1;32m'
export COLOR_BROWN='\e[0;33m'
export COLOR_YELLOW='\e[1;33m'
export COLOR_BLUE='\e[0;34m'
export COLOR_LIGHT_BLUE='\e[1;34m'
export COLOR_PURPLE='\e[0;35m'
export COLOR_LIGHT_PURPLE='\e[1;35m'
export COLOR_CYAN='\e[0;36m'
export COLOR_LIGHT_CYAN='\e[1;36m'
export COLOR_LIGHT_GRAY='\e[0;37m'
export COLOR_WHITE='\e[1;37m'

clear

echo "${COLOR_LIGHT_RED}1_progress >>>${COLOR_NONE}"
ls -CF /tr/1_progress/

echo ""
echo "${COLOR_LIGHT_RED}2_download_done >>>${COLOR_NONE}"
ls -CF /tr/2_download_done/

echo ""
echo "${COLOR_LIGHT_RED}3_renamed >>>${COLOR_NONE}"
ls -CF /tr/3_renamed/

echo ""
echo "${COLOR_LIGHT_RED}4_complete >>>${COLOR_NONE}"
ls -CF /tr/4_complete/

echo ""
echo "${COLOR_LIGHT_RED}7_foldered >>>${COLOR_NONE}"
ls -CF /tr/7_foldered/

echo ""
echo "${COLOR_LIGHT_RED}df >>>${COLOR_NONE}"
df -h | grep -e ubuntu--vg -e Filesystem -e /dev/sda1

echo ""
echo "${COLOR_LIGHT_RED}ifstat >>>${COLOR_NONE}"
ifstat -S 1 1s

echo ""s
echo ""
echo "${COLOR_LIGHT_RED}sensors >>>${COLOR_NONE}"
sensors | grep temp1:

echo ""
echo "${COLOR_LIGHT_RED}date >>>${COLOR_NONE}"
date

echo ""
echo "${COLOR_LIGHT_RED}uptime >>>${COLOR_NONE}"
uptime

echo ""
echo "${COLOR_LIGHT_RED}log >>>${COLOR_NONE}"
tail -20 /tr/99_log/check.log
