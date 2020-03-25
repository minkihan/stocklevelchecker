const init = require( "./common/init.js" ) ;

const patagonia = require( "./model/patagonia.js" ) ;
const parse_patagonia = require( "./service/parse_patagonia.js" ) ;

( async() => {
    //await init.start() ;
    await parse_patagonia.getList() ;
    //await patagonia.find() ;

    //process.exit() ;
} ) () ;
