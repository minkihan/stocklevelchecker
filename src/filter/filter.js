exports.filter = () => {
    return [
        ".",
        "-1080P", "-2160P", "-720P", "-2K", "-4K",
        "-FHD", "FHD-", "FHD", "HD-", "-HD", "-FULL", "(1080P)",
        "-H264", "6M-",
        "蜂鸟@FN151.COM-", "@蜂鳥@FENGNIAO131.VIP-", "@蜂鳥@FENGNIAO131VIP-",
        "HJD2048COM-",
        "ONE2048.COM-", "ONE2048COM-",
        "BIG2048.COM@", "BIG2048COM@",
        "FUN2048.COM@", 
        "2048论坛@FUN2048.COM - @", "2048论坛@FUN2048.COM -",
        "2048论坛@FUN2048COM -@", "2048论坛@FUN2048COM -",
        "-NYAP2P.COM", "~NYAP2P.COM", "~NYAP2PCOM", "-NYAP2PCOM",
        ".HD1080P-WWW.52IV.NET", ".WWW.52IV.NET",
        "-IDOLRED", "-IDOL", " - JAV",
        "DLJAV.NET-", "[FBFB.ME]", "[鱼香肉丝]", "TOKYO-HOT", "@18P2P",
        "CD1", "CD2", "CD3", "CD4"
    ] ;
}

exports.filter2 = () => {
    return [
        { "match" : /(-|_)A$/, "replace" : "-1" },
        { "match" : /(-|_)B$/, "replace" : "-2" },
        { "match" : /(-|_)C$/, "replace" : "-3" },
        { "match" : /(-|_)D$/, "replace" : "-4" },
        { "match" : /(-|_)E$/, "replace" : "-5" },
        { "match" : /(-|_)F$/, "replace" : "-6" },
        { "match" : /(-|_)G$/, "replace" : "-7" },
        { "match" : /(-|_)H$/, "replace" : "-8" },
        { "match" : /360AEG/, "replace" : "AEG" },
        { "match" : /360MBM/, "replace" : "MBM" },
        { "match" : /21MIHA/, "replace" : "MIHA" },
        { "match" : /217MIHA/, "replace" : "MIHA" },
        { "match" : /107EMOI/, "replace" : "EMOI" },
        { "match" : /107OKYH/, "replace" : "OKYH" },
        { "match" : /107STKO/, "replace" : "STKO" },
        { "match" : /1SVDVD/, "replace" : "SVDVD" },
        { "match" : /217MIHA/, "replace" : "MIHA" },
        { "match" : /1SVRE/, "replace" : "SVRE" },
        { "match" : /1STARS/, "replace" : "STARS" },
        { "match" : /1KIRE/, "replace" : "KIRE" },
        { "match" : /1SDJS/, "replace" : "SDJS" },
        { "match" : /1SDDE/, "replace" : "SDDE" },
        { "match" : /1SDTF/, "replace" : "SDTF" },
        { "match" : /1SDAB/, "replace" : "SDAB" },
        { "match" : /393OTIM/, "replace" : "OTIM" },
        { "match" : /320MMGH/, "replace" : "MMGH" },
        { "match" : /336KBI/, "replace" : "KBI" },
        { "match" : /H-086JRZD/, "replace" : "JRZD" },
        { "match" : /H-1154IMPNO/, "replace" : "IMPNO" },
        { "match" : /424PSST/, "replace" : "PSST" },
        { "match" : /390JAC/, "replace" : "JAC" },
        { "match" : /107SHYN/, "replace" : "SHYN" },
        { "match" : /406FTBL/, "replace" : "FTBL" },
        { "match" : /406FTHT/, "replace" : "FTHT" },
        { "match" : /425IKST/, "replace" : "IKST" },
        { "match" : /118SOUD/, "replace" : "SOUD" },
        { "match" : /110AKD/, "replace" : "AKD" },
        { "match" : /118SIM/, "replace" : "SIM" },
        { "match" : /118KFNE/, "replace" : "KFNE" },
        { "match" : /336DTT/, "replace" : "DTT" },
        { "match" : /116SHH/, "replace" : "SHH" },
        { "match" : /450OSST/, "replace" : "OSST" },
        { "match" : /315ETQR/, "replace" : "ETQR" },
        { "match" : /107SDFK/, "replace" : "SDFK" },
        { "match" : "000", "replace" : "-0" },
        //{ "match" : /([A-Z]*)(00)([0-9]*)/, "replace" : "(0)-(2)" },
        { "match" : /\s*/g, "replace" : "" } 
    ] ;
}

exports.filter3 = () => {
    return [
        { "match" : /[A-Z]+$/, "replace" : "" }
    ] ;
}
