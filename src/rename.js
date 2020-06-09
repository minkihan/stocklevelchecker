const xxpath = "/Users/min-kihan/Google Drive File Stream/내 드라이브/APP/__inbox_xx/" ;

const path = require( "path" ) ;
const fs = require( "fs" ) ;

const filter = [
    "-1080P", "-2160P", "-720P", "-FHD", "-HD", "_FULL", "_HD",
    "蜂鸟@FN151.COM-", "HJD2048.COM_", "FUN2048.COM@", "-NYAP2P.COM"
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
    { "match" : "_", "replace" : "-" }
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
        const pt = file.split( ".mp4" ) ;
        let st = pt[0].toUpperCase() ;
        
        // 파일명 정리
        filter.forEach( ( v, i ) => {
            st = st.replace( v, "" ) ;
        } ) ;
        filter2.forEach( ( v, i ) => {
            st = st.replace( v.match, v.replace ) ;
        } ) ;

        //console.log( xxpath + file, " >>> ", xxpath + st + ".mp4" ) ; 

        fs.rename( xxpath + file, xxpath + st + ".mp4", () => {
            console.log( xxpath + file, " >>> ", xxpath + st + ".mp4" ) ; 
        } ) ;
    } ) ;
} ) ;