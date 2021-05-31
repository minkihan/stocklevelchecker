//const init = require( "./common/init.js" ) ;
const jav = require( "./model/jav.js" ) ;
const parse_jav_detail = require( "./service/parse_jav_detail_test.js" ) ;

( async() => {
    const j = { 
        href : "https://www.javbus.com/" + process.argv[2]
        , magnet : [] } ;
    await parse_jav_detail.getDetail( j ) ;
    //process.exit() ;
} ) () ;