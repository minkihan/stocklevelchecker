const init = require( "./common/init.js" ) ;

const javlogger = require( "./model/javlogger.js" ) ;
const getparsehtml = require( "./service/getparsehtml.js" ) ;

( async() => {
    await init.start() ;
    //await javlogger.create( "ayakano5" ) ;
    await javlogger.find() ;

    getparsehtml.getList( 1 ) ;
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