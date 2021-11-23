const filter = () => [
    "."
    , "-1080P"
    , "1080P"
    , "-2160P"
    , "-720P"
    , "-2K"
    , "-4K"
    , "-FHD"
    , "FHD-"
    , "FHD"
    , "HD-"
    , "-HD"
    , "[HD]"
    , "-FULL"
    , "(1080P)"
    , "-H264"
    , "6M-"
    , "蜂鸟@FN131.COM-"
    , "@蜂鳥@FENGNIAO131.VIP-"
    , "@蜂鳥@FENGNIAO131VIP-"
    , "蜂鸟@FN151.COM-"
    , "@蜂鳥@FENGNIAO151.VIP-"
    , "@蜂鳥@FENGNIAO151VIP-"
    , "HJD2048COM-"
    , "ONE2048.COM-"
    , "ONE2048COM-"
    , "BIG2048.COM@"
    , "BIG2048COM@"
    , "FUN2048.COM@" 
    , "CHD1080COM@"
    , "HHD800COM"
    , "HHD800.COM@"
    , "-WWW.YOUIVPAGE.COM"
    , "BBS2048ORG@"
    , "KPXVSCOM-"
    , "2048论坛@FUN2048.COM - @"
    , "2048论坛@FUN2048.COM -"
    , "2048论坛@FUN2048COM -@"
    , "2048论坛@FUN2048COM -"
    , "-NYAP2P.COM"
    , "~NYAP2P.COM"
    , "~NYAP2PCOM"
    , "-NYAP2PCOM"
    , ".HD1080P-WWW.52IV.NET"
    , ".WWW.52IV.NET"
    , ".HHD-WWW.52IV.NET"
    , "-IDOLRED"
    , "-IDOL"
    , " - JAV"
    , "DLJAV.NET-"
    , "[鱼香肉丝]"
    , "TOKYO-HOT"
    , "@18P2P"
    , "FBFBME-"
    , "FBFB.ME@"
    , "[FBFB.ME]"
    , "CD1"
    , "CD2"
    , "CD3"
    , "CD4"
    , "(KAWAII)"
    , "KPAPKCOM-"
    , "BAIXNXYZ-"
    , "BAIAPKXYZ-"
    , "BBYXVXYZ-"
    , "H-706"
    , "H-094"
    , "H-1248"
    , "H-1256"
    , "TAXVXYZ-"
    , "JPAVBTCOM-"
    , "AAXVXYZ-"
    , "BBSXVXYZ-"
    , "BBSXVXYZ"
    , "H-1569"
    , "H-1270"
    , "H-1116"
    , "EAPKXYZ-"
    , "ICAOME"
    , "JAV20S8COM"
    , "H-068"
    , "HDD600COM"
    , "HDD800COM"
] 

const filter2 = () => [
    [ /(-|_)A$/, "-1" ]
    , [ /(-|_)B$/, "-2" ]
    , [ /(-|_)C$/, "" ]
    , [ /(-|_)D$/, "-4" ]
    , [ /(-|_)E$/, "-5" ]
    , [ /(-|_)F$/, "-6" ]
    , [ /(-|_)G$/, "-7" ]
    , [ /(-|_)H$/, "-8" ]
    , [ /PART1$/, "-1" ]
    , [ /PART2$/, "-2" ]
    , [ /PART3$/, "-3" ]
    , [ /PART4$/, "-4" ]
    , [ /PART5$/, "-5" ]
    , [ /PART6$/, "-6" ]
    , [ /R1$/, "-1" ]
    , [ /R2$/, "-2" ]
    , [ /R3$/, "-3" ]
    , [ /R4$/, "-4" ]
    , [ /R5$/, "-5" ]
    , [ /R6$/, "-6" ]
    , [ /^[0-9]*/, "" ]
    , [ /H-086JRZD/, "JRZD" ]
    , [ /H-1154IMPNO/, "IMPNO" ]
    , [ /H-1569NKKVR/, "NKKVR" ]
    , [ /[^A-Z0-9-]/g, "" ]
    , [ /\s*/g, "" ]
] 

const filter3 = () => [
    [ /[A-Z]+$/, "" ]
] 

module.exports = {
    filter
    , filter2
    , filter3
}