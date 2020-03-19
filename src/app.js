const init = require( "./common/init.js" ) ;

const patagonia = require( "./model/patagonia.js" ) ;
const getparsehtml = require( "./service/getparsehtml.js" ) ;

( async() => {
    await init.start() ;
    await patagonia.create( "torrentshell 3l black - SIZE : L" ) ;
    await patagonia.find() ;

    //getparsehtml.getList( 1 ) ;
} ) () ;


/*
const call = async() => {
    for( let i = 1 ; i < 2 ; i++ ) {
        getList( i ) ;
    }
    await c.log( url ) ;
}

( async() => {
    const x = [1,2,3] ;
    x.map( ( v, i ) => {
        log( v, i ) ;
    } ) ;
} ) () ;
*/
