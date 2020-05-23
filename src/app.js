const init = require( "./common/init.js" ) ;

//const patagonia = require( "./model/patagonia.js" ) ;
//const parse_patagonia = require( "./service/parse_patagonia.js" ) ;
const jav = require( "./model/jav.js" ) ;
const parse_jav = require( "./service/parse_jav.js" ) ;

const list = [
    'https://www.javbus.com/ko/DANDY-714',
    'https://www.javbus.com/ko/GVH-070',
    'https://www.javbus.com/ko/GVH-068'
  ] ;

( async() => {
    //await init.start() ;
    //await parse_patagonia.getList() ;

    const a = await parse_jav.getList() ;
    // list.forEach( ( i, v ) => {
    //     setTimeout( () => {
    //         console.log( new Date(), v ) ;
    //     }, v * 500 ) ;
        
    // } ) ;
    //await patagonia.find() ;

    //process.exit() ;
} ) () ;
