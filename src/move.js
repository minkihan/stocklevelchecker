const fs = require( "fs" ) ;

const pathFoldered = "/tr/7_foldered/" ;
const pathDownload = "/tr/2_download_done/" ;

const isTest = process.argv.slice( 2 )[ 0 ] === "test" ;
let counter = 0 ;
fs.readdir( pathFoldered, ( err, files ) => {
    //handling error
    if ( err ) {
        console.error( "Unable to scan directory: " ) ;
        console.error( err ) ;
        return ;
    } 
    files.forEach( ( file ) => {
        counter++ ;
        if( counter > 1 ) {
            // Return 0 ;
        }
        
        fs.readdir( pathFoldered + file, ( err2, files2 ) => {
            if ( err2 ) {
                console.error( err2 ) ;
                return ;
            }
            const ta = [] ;
            files2.forEach( ( file2 ) => {
                const file2Path = `${ pathFoldered + file }/${ file2 }` ;
                const stat = fs.statSync( file2Path ) ;
                const size = stat.size / 1024 / 1024 ;
                // 300 메가 미만 걸러 ~~
                if( size > 300 ) {
                    ta.push( {
                        "name" : file2
                        , "path" : file2Path
                        , size
                    } ) ;
                }
            } ) ;
            ta.sort( ( a, b ) => {
                if( a.size > b.size ) {
                    return -1 ;
                }
                if( a.size < b.size ) {
                    return 1 ;
                }
                return 0 ;
            } ) ;

            if( ta.length < 1 ) {
                return 0 ;
            }

            const pickSize = ta[ 0 ].size ;
            ta.forEach( ( v, i ) => {
                if( pickSize * 0.8 <= ta[ i ].size ) {
                    if( ! isTest ) {
                        // Real
                        fs.rename( ta[ i ].path, pathDownload + ta[ i ].name, () => {
                            console.log( ta[ i ].name, ta[ i ].size ) ;
                        } ) ;
                    } else {
                        // For test
                        const name = new String( ta[ i ].name ) ;
                        let passflag = true ;
                        const pass = [
                            "720p"
                            , "720P"
                            , ".SD."
                        ] ;

                        // 수동으로 이동할때 거를 목록... ㅠㅠ
                        // const pass = [ "720p", "720P", ".SD.", "fun2048", "hjd2048", "big2048", "nyap2p", "one2048", "heyzo", "carib", "1pon" ] ;
                        for( const vv of pass ) {
                            if( name.includes( vv ) ) {
                                passflag = false ;
                            }
                        }
                        if( passflag ) {
                            console.log( ta[ i ].name, ta[ i ].size, ta[ i ].path, pathDownload + ta[ i ].name ) ;
                        }
                    }
                }
            } ) ;
        } ) ;
    } ) ;
} ) ;