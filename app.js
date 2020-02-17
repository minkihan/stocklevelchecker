const axios = require( "axios" ) ;
const cheerio = require( "cheerio" ) ;
const getconnection = require( "./db.js" ) ;
const findjavlogger = require( "./dbfind.js" ) ;
const log = console.log ;

const domain = "https://www.javbus.com/ko/" ;

const waitfor = ms => new Promise( r => setTimeout( r, ms ) ) ;
const getDetail = async( url ) => {
    const getHtml = async( url ) => {
        try {
            return await axios.get( url ) ;
        } catch( e ) {
            console.error( e ) ;
        }
    } ;
    const urlMap = 
        url.map( async( e, i ) => {
            await getHtml( e.href ).then( html => {
                const $ = cheerio.load( html.data ) ;
                const bigImage = $( ".row.movie" ).find( ".bigImage" ).prop( "href" ) ;
                url[i].bigImage = bigImage ;
                //log( "###1", url ) ;
            } ).catch( err => {
                log( err ) ; 
            } ) ;
        } ) ;
    
    await Promise.all( urlMap ) ;
    log( "###2", url ) ;
    return url ;
}
const getList = i => {
    const getHtml = async( i ) => {
        try {
            let page = `https://www.javbus.com/ko/page/${i}` ;
            return await axios.get( page ) ;
        } catch( e ) {
            console.error( e ) ;
        }
    } ;
    getHtml( i ).then( html => {
        const $ = cheerio.load( html.data ) ;
        const list = $( "#waterfall" ).children( ".item" ) ;
        const url = [] ;
        list.each( function( i, v ) {
            const os = $( this ).find( ".movie-box" ).prop( "href" ) ;
            url.push( {
                seq : os.replace( domain, "" )
                , href : os 
            } ) ;
        } ) ;
        return url ;
    } ).then( url => {
        getDetail( url ).then( url => {
            log( "###3", url ) ;
        } ) ;
    } ).catch( e => {
        log( e ) ; 
    } ) ;
}

const call = async() => {
    for( let i = 1 ; i < 2 ; i++ ) {
        getList( i ) ;
    }
    await log( url ) ;
}

( async() => {
    //await getconnection() ;
    //await findjavlogger() ;
    //call() ;

    getList( 1 ) ;

    /*
    const x = [1,2,3] ;
    x.map( ( v, i ) => {
        log( v, i ) ;
    } ) ;
    */
} ) () ;
