const axios = require( "axios" ) ;
const cheerio = require( "cheerio" ) ;
const iconv = require( "iconv-lite" ) ;

const jav = require( "../model/jav.js" ) ;
const jav_detail= require( "./parse_jav_detail.js" ) ;
const url = `https://www.javbus.com/ko/page/1` ;

const a = [] ;
module.exports.getList = async() => {
    const getHtml = async() => {
        return await axios.request( {
            method           : "GET",
            url              : url
        } ) ;
    } ;
    getHtml().then( html => {
        const $ = cheerio.load( html.data ) ;
        const list = $( "#waterfall > .item > .movie-box" ) ;

        list.each( ( i, v ) => {
            if( i > 2 ) {
                //return 0 ;
            }
            setTimeout( () => {
                const j = {
                    href   : v.attribs.href,
                    title  : $( v ).find( "img" )[0].attribs.title,
                    magnet : []
                } ;
                jav_detail.getDetail( j ) ;
            }, i * 1000 * 10 ) ;
        } ) ;

        // async.forEachOf( list, ( value, key, callback ) => {
        //         const j = {
        //             href   : value.attribs.href,
        //             title  : $( value ).find( "img" )[0].attribs.title,
        //             magnet : []
        //         } ;
                
        //         setInterval( () => {
        //             console.log( j ) ;    
        //         }, 1000 * 3 ) ;
        //         //jav_detail.getDetail( j ) ;
        // }, err => {
        //     if ( err ) console.error( err.message ) ;
        // } ) ;
    } ).then( () => {
        
    } ).catch( e => {
        console.error( e ) ; 
    } ) ;
}
