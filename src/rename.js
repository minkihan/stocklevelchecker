const path = require( "path" ) ;
const fs = require( "fs" ) ;
const filter = require( "./filter/filter.js" ) ;

const path_2_download_done = "/tr/2_download_done/" ;
const path_3_renamed = "/tr/3_renamed/" ;
const isTest = process.argv.slice( 2 )[0] === "test" ? true : false ;

//joining path of directory 
//const directoryPath = path.join( __dirname, path_2_download_done ) ;
//passsing directoryPath and callback function
fs.readdir( path_2_download_done, function ( err, files ) {
    //handling error
    if ( err ) {
        return console.log( "Unable to scan directory: " + err ) ;
    } 
    //listing all files using forEach
    files.forEach( function ( file ) {
        let isDirectory = false ;
        if( fs.lstatSync( path_2_download_done + file ).isDirectory() ) {
            isDirectory = true ;
        }

        if( isDirectory ) { 
            //move.start( isTest ) ;
        } else {
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
            st = st.replace( "_", "-" ) ;
            filter.filter().forEach( ( v, i ) => {
                st = st.replace( v, "" ) ;
            } ) ;
            filter.filter2().forEach( ( v, i ) => {
                st = st.replace( v.match, v.replace ) ;
            } ) ;
            filter.filter3().forEach( ( v, i ) => {
                st = st.replace( v.match, v.replace ) ;
            } ) ;
            const h = /00([0-9]+[0-9]+)/ ;
            if( h.test( st ) ) {
                st = st.replace( "00", "-" ) ;
            }
            const h2 = /([a-zA-Z]*)-([0-9]*)/ ;
            const h3 = /([a-zA-Z]*)([0-9]*)/ ;
            if( ! h2.test( st ) ) {
                const h3r = h3.exec( st ) ;
                st = h3r[1] + "-" + h3r[2] ;
            }

            if( ! isTest ) {
                fs.rename( path_2_download_done + file, path_3_renamed + st + ".mp4", () => {
                    //console.log( path_2_download_done + file, " >>> ", path_2_download_done + st + ".mp4" ) ;
                    console.log( file, " >>> ", st + ext ) ;
                } ) ;
            } else {
                console.log( file, " >>> ", st + ext ) ;
            }
        }
    } ) ;
} ) ;
