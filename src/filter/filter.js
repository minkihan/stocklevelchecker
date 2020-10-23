exports.filter = () => {
    return [
        ".",
        "-1080P", "-2160P", "-720P", "_2K", "-2K",
        "-FHD", "FHD", "HD-", "HD_", "-HD", "_HD", "_FULL", "(1080P)",
        "蜂鸟@FN151.COM-", "@蜂鳥@FENGNIAO131.VIP-",
        "HJD2048.COM_", "FUN2048.COM@", "BIG2048.COM@", "ONE2048.COM-", "ONE2048.COM_",
        "2048论坛@FUN2048.COM - @", "2048论坛@FUN2048.COM -",
        "-NYAP2P.COM", "~NYAP2P.COM", 
        ".HD1080P-WWW.52IV.NET", ".WWW.52IV.NET",
        "-IDOLRED", "-IDOL", 
        "DLJAV.NET-", "[FBFB.ME]", "[鱼香肉丝]", "TOKYO-HOT", "@18P2P"
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
        { "match" : /360AEG/, "replace" : "AEG" },
        { "match" : /360MBM/, "replace" : "MBM" },
        { "match" : /21MIHA/, "replace" : "MIHA" },
        { "match" : /107EMOI/, "replace" : "EMOI" },
        { "match" : /107OKYH/, "replace" : "OKYH" },
        { "match" : /107STKO/, "replace" : "STKO" },
        { "match" : /1SVDVD/, "replace" : "SVDVD" },
        { "match" : /217MIHA/, "replace" : "MIHA" },
        { "match" : /1SVRE/, "replace" : "SVRE" },
        { "match" : /393OTIM/, "replace" : "OTIM" },
        { "match" : /320MMGH/, "replace" : "MMGH" },
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
        { "match" : "_", "replace" : "-" },
        { "match" : "000", "replace" : "-0" },
        //{ "match" : /([A-Z]*)(00)([0-9]*)/, "replace" : "(0)-(2)" },
        { "match" : /\s*/g, "replace" : "" } 
    ] ;
}