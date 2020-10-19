const path = require( "path" ) ;
const fs = require( "fs" ) ;

const xxpath = "/home/minkihan/__TRANSMISSION/7_foldered/" ;
const tgpath = "/home/minkihan/__TRANSMISSION/2_download_done/" ;
const isTest = process.argv.slice( 2 )[0] === "test" ? true : false ;

//module.exports.start = async( isTest ) => {
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
                //const isTest = true ;
                const pickSize = ta[0].size ;
                ta.forEach( ( v, i ) => {
                    if( pickSize * 0.8 <= ta[i].size ) {
                        if( ! isTest ) {
                            // real
                            fs.rename( ta[i].path, tgpath + ta[i].name, () => {
                                console.log( ta[i].name, ta[i].size, ta[i].path ) ;
                            } ) ;
                        } else {
                            // for test
                            const name =  new String( ta[i].name ) ;
                            let passflag = true ;
                            const pass = [ "720p", "720P", ".SD." ] ;

                            // 수동으로 이동할때 .. ㅠㅠ
                            // const pass = [ "720p", "720P", ".SD.", "fun2048", "hjd2048", "big2048", "nyap2p", "one2048", "heyzo", "carib", "1pon" ] ;
                            pass.forEach( ( v, i ) => {
                                if( name.includes( v ) ) {
                                    passflag = false ;
                                }
                            } ) ;
                            if( passflag ) {
                                console.log( ta[i].name, ta[i].size, ta[i].path ) ;
                            }
                        }
                    }
                } ) ;
            } ) ;
        } ) ;
    } ) ;
//}