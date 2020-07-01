const xxpath = "/Users/min-kihan/Google Drive File Stream/내 드라이브/APP/__FOLDERED/" ;
const tgpath = "/Users/min-kihan/Google Drive File Stream/내 드라이브/APP/__inbox_xx/" ;

const path = require( "path" ) ;
const fs = require( "fs" ) ;

let counter = 0 ;
fs.readdir( xxpath, function ( err, files ) {
    if ( err ) {
        return console.log( "Unable to scan directory: " + err ) ;
    } 
    files.forEach( function ( file ) {
        counter++ ;
        if( counter > 1 ) {
            //return 0 ;
        }
        
        fs.readdir( xxpath + file, function ( err, files2 ) {
            const ta = [] ;
            files2.forEach( function ( file2 ) {
                const file2Path = xxpath + file + "/" + file2 ;
                const stat = fs.statSync( file2Path ) ;
                const size = stat.size / 1024 / 1024 ;
                // 300 메가 미만 걸러 ~~
                if( size > 300 ) {
                    ta.push( {
                        name : file2,
                        path : file2Path,
                        size : size
                    } ) ;
                }
            } ) ;
            ta.sort( ( a, b ) => {
                if( a.size > b.size ) {
                    return - 1 ;
                }
                if( a.size < b.size ) {
                    return 1 ;
                }
                return 0 ;
            } )

            const pickIndexList = [] ;
            if( ta.length < 1 ) {
                return 0 ;
            }

            // for test
            //console.log( file ) ;
            const isTest = true ;
            const pickSize = ta[0].size ;
            ta.forEach( ( v, i ) => {
                if( pickSize * 0.8 <= ta[i].size ) {
                    if( ! isTest ) {
                        fs.rename( ta[i].path, tgpath + ta[i].name, () => {
                            console.log( ta[i].name, ta[i].size, ta[i].path ) ;
                        } ) ;
                    } else {
                        console.log( ta[i].name, ta[i].size, ta[i].path ) ;
                    }
                }
            } ) ;
        } ) ;
    } ) ;
} ) ;