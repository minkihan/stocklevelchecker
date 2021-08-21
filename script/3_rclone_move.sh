#!/bin/sh

# move renamed(3) to complete(4)
sudo mv /tr/3_renamed/* /tr/4_complete/

# rclone move 
sudo nohup sudo rclone move /tr/4_complete/ gdupload: --delete-empty-src-dirs > /dev/null 2>&1 &
