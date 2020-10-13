const init = require( "./common/init.js" ) ;
const jav = require( "./model/jav.js" ) ;
const parse_jav = require( "./service/parse_jav_href.js" ) ;

( async() => {
    const a = await parse_jav.getList( process.argv[2] ) ;
} ) () ;
