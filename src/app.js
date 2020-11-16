//const init = require( "./common/init.js" ) ;
const jav = require( "./model/jav.js" ) ;
const parse_jav = require( "./service/parse_jav.js" ) ;

( async() => {
    await parse_jav.getList( process.argv[2] ) ;
    //process.exit() ;
} ) () ;