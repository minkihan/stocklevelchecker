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
    , [ /360AEG/, "AEG" ]
    , [ /360MBM/, "MBM" ]
    , [ /21MIHA/, "MIHA" ]
    , [ /217MIHA/, "MIHA" ]
    , [ /107EMOI/, "EMOI" ]
    , [ /107OKYH/, "OKYH" ]
    , [ /107STKO/, "STKO" ]
    , [ /1SVDVD/, "SVDVD" ]
    , [ /217MIHA/, "MIHA" ]
    , [ /1SVRE/, "SVRE" ]
    , [ /1STARS/, "STARS" ]
    , [ /1KIRE/, "KIRE" ]
    , [ /1SDJS/, "SDJS" ]
    , [ /1SDDE/, "SDDE" ]
    , [ /1SDTF/, "SDTF" ]
    , [ /1SDAB/, "SDAB" ]
    , [ /393OTIM/, "OTIM" ]
    , [ /320MMGH/, "MMGH" ]
    , [ /336KBI/, "KBI" ]
    , [ /H-086JRZD/, "JRZD" ]
    , [ /H-1154IMPNO/, "IMPNO" ]
    , [ /424PSST/, "PSST" ]
    , [ /390JAC/, "JAC" ]
    , [ /107SHYN/, "SHYN" ]
    , [ /406FTBL/, "FTBL" ]
    , [ /406FTHT/, "FTHT" ]
    , [ /425IKST/, "IKST" ]
    , [ /118SOUD/, "SOUD" ]
    , [ /110AKD/, "AKD" ]
    , [ /118SIM/, "SIM" ]
    , [ /118KFNE/, "KFNE" ]
    , [ /336DTT/, "DTT" ]
    , [ /116SHH/, "SHH" ]
    , [ /450OSST/, "OSST" ]
    , [ /315ETQR/, "ETQR" ]
    , [ /107SDFK/, "SDFK" ]
    , [ /477GRMO/, "GRMO" ]
    , [ /107HYPN/, "HYPN" ]
    , [ /13DSVR/, "DSVR" ]
    , [ /269OYAJ/, "OYAJ" ]
    , [ /270JGAHO/, "JGAHO" ]
    , [ /022BHUST/, "BHUST" ]
    //, [ /([A-Z]*)(00)([0-9]*)/, "(0)-(2)"]
    //, [ /[\(\)]/g, ""]
    , [ /[^A-Z0-9-]/g, "" ]
    //, ["000", "-0"]
    , [ /\s*/g, "" ]
] 

const filter3 = () => [
    [ /[A-Z]+$/, "" ]
] 

export { filter, filter2, filter3 }