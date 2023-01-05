7za.exe x -y .\update.zip -o".\"
del .\update.zip
pm2 restart all