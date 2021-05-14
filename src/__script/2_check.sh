#!/bin/sh

# log now
DATETIME=$(date '+%Y-%m-%d %H:%M:%S')

# is xxx
ISXXX=1

if [ ${ISXXX} -gt 0 ]
then
    # rename & move to renamed(3)
    echo "[${DATETIME}]" >> /tr/99_log/rename.log
    sudo node /code/stocklevelchecker/src/rename >> /tr/99_log/rename.log &
    wait $!

    # move directory download_done(2) to foldered(7)
    sudo mv /tr/2_download_done/* /tr/7_foldered/ &
    wait $!

    # move by select logic
    echo "[${DATETIME}]" >> /tr/99_log/move.log
    sudo node /code/stocklevelchecker/src/move >> /tr/99_log/move.log &
    wait $!

    # rename & move to renamed(3) AGIAN
    sudo node /code/stocklevelchecker/src/rename >> /tr/99_log/rename.log &
    wait $!
else
    # not xxx file is pass rename process
    sudo mv /tr/2_download_done/* /tr/3_renamed &
    wait $!
fi

# execute rclone_move
d1=$(printf "%02d" $(ls /tr/1_progress | wc -l))
d2=$(printf "%02d" $(ls /tr/2_download_done | wc -l))
d3=$(printf "%02d" $(ls /tr/3_renamed | wc -l))
d4=$(printf "%02d" $(ls /tr/4_complete | wc -l))
du1=$(du /tr/1_progress -skh | grep -oh "^[0-9\.G]*")
du2=$(du /tr/2_download_done -skh | grep -oh "^[0-9\.G]*")
du3=$(du /tr/3_renamed -skh | grep -oh "^[0-9\.G]*")
du4=$(du /tr/4_complete -skh | grep -oh "^[0-9\.G]*")
msg="[${DATETIME}] uploading=${d4} waiting=${d3}"
if [ ${d4} -lt 1 ]
then
    if [ ${d3} -gt 0 ]
    then
        #sed -i '1s/^/'"$msg"' EXECUTE CCC >> '"$dut"'\n/' /trslog/check.log
    echo $msg "UPLOAD >>" $du3
    sudo sh /tr/88_script/3_rclone_move.sh
    else
        echo $msg "..."
    fi
else
    #sed -i '1s/^/'"$msg"' UPLOADING >> '"$duc"'\n/' /trslog/check.log
    echo $msg "..." $du4
fi
