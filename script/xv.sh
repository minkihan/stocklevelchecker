/usr/bin/Xvfb -ac :99 -screen 0 1280x1024x16 &
export DISPLAY=:99


# xvfb dependency ...
# sudo apt-get install -y xvfb
# sudo apt-get -y install xorg xvfb gtk2-engines-pixbuf
# sudo apt-get -y install dbus-x11 xfonts-base xfonts-100dpi xfonts-75dpi xfonts-cyrillic xfonts-scalable