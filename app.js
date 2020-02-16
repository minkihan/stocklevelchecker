const axios = require( "axios" ) ;
const cheerio = require( "cheerio" ) ;
const log = console.log ;
const getconnection = require( "./db.js" ) ;
const findjavlogger = require( "./dbfind.js" ) ;

( async() => {
    await getconnection() ;
    await findjavlogger() ;
} ) () ;

function test() {
    const getHtml = async() => {
        try {
            return await axios.get( "https://www.javbus.com/ko/page/2" ) ;
        } catch( e ) {
            console.error( e ) ;
        }
    } ;
    getHtml().then( html => {
        const $ = cheerio.load( html.data ) ;
        const list = $( "#waterfall" ).children( ".item" ) ;
        list.each( function( i, v ) {
            log( $( this ).find( ".movie-box" ).prop( "href" ) ) ;
        } ) ;
    } ).catch( e => {
        log( e ) ; 
    } ) ;
}