// 수집할 페이지 ... 이걸 어케 하지 .. ?
const axios = require( "axios" ) ;
const cheerio = require( "cheerio" ) ;
const iconv = require( "iconv-lite" ) ;

const jav = require( "../model/jav.js" ) ;
const jav_detail= require( "./parse_jav_detail.js" ) ;
const a = [] ;

module.exports.getList = async( page ) => {
    console.log( "page", page ) ;
    const url = `https://www.javbus.com/ko/page/${page}` ;
    //const url = `https://www.javbus.com/ko/star/s3q/${page}` ;
    //const url = `https://www.javbus.com/ko/uncensored/page/${page}`
    //const url = `https://www.javbus.com/ko/uncensored/search/hamesamurai/${page}` ;
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
            console.log( v.attribs.href ) ;
        } ) ;
    } ).then( () => {
        
    } ).catch( e => {
        console.error( e ) ; 
    } ) ;
}
