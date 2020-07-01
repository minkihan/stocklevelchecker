const xxpath = "/Users/min-kihan/Google Drive File Stream/내 드라이브/APP/__inbox_xx/" ;

const path = require( "path" ) ;
const fs = require( "fs" ) ;

const filter = [
    "-1080P", "-2160P", "-720P",
    "-FHD", "FHD", "HD-", "-HD", "_FULL", "_HD", "(1080P)",
    "蜂鸟@FN151.COM-", "HJD2048.COM_", "FUN2048.COM@", "@18P2P",
    "-NYAP2P.COM", "~NYAP2P.COM", "BIG2048.COM@",
    "2048论坛@FUN2048.COM - @", "2048论坛@FUN2048.COM -",
] ;

const filter2 = [
    { "match" : /(-|_)A$/, "replace" : "-1" },
    { "match" : /(-|_)B$/, "replace" : "-2" },
    { "match" : /(-|_)C$/, "replace" : "-3" },
    { "match" : /(-|_)D$/, "replace" : "-4" },
    { "match" : /(-|_)E$/, "replace" : "-5" },
    { "match" : /(-|_)F$/, "replace" : "-6" },
    { "match" : /360AEG/, "replace" : "AEG" },
    { "match" : /107EMOI/, "replace" : "EMOI" },
    { "match" : /393OTIM/, "replace" : "OTIM" },
    { "match" : /424PSST/, "replace" : "PSST" },
    { "match" : /390JAC/, "replace" : "JAC" },
    { "match" : /107SHYN/, "replace" : "SHYN" },
    { "match" : "_", "replace" : "-" },
    //{ "match" : /([A-Z]*)(00)([0-9]*)/, "replace" : "(0)-(2)" },
    { "match" : /\s*/g, "replace" : "" } 
]

//joining path of directory 
//const directoryPath = path.join( __dirname, xxpath ) ;
//passsing directoryPath and callback function
fs.readdir( xxpath, function ( err, files ) {
    //handling error
    if ( err ) {
        return console.log( "Unable to scan directory: " + err ) ;
    } 
    //listing all files using forEach
    files.forEach( function ( file ) {
        // Do whatever you want to do with the file
        let ext = "" ;
        if( file.split( ".mp4" ).length > 1 ) {
            ext = ".mp4" ;
        } else if( file.split( ".mkv" ).length > 1 ) {
            ext = ".mkv" ;
        }
        
        const pt = file.split( ext ) ;
        let st = pt[0].toUpperCase() ;
        
        // 파일명 정리
        filter.forEach( ( v, i ) => {
            st = st.replace( v, "" ) ;
        } ) ;
        filter2.forEach( ( v, i ) => {
            st = st.replace( v.match, v.replace ) ;
        } ) ;

        const isTest = true ;
        if( ! isTest ) {
            fs.rename( xxpath + file, xxpath + st + ".mp4", () => {
                //console.log( xxpath + file, " >>> ", xxpath + st + ".mp4" ) ;
                console.log( file, " >>> ", st + ext ) ;
            } ) ;
        } else {
            console.log( file, " >>> ", st + ext ) ;
        }
    } ) ;
} ) ;