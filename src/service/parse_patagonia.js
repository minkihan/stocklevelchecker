// web special discount ...
// http://www.patagonia.co.kr/shop/goods/goods_list.php?category=006011

const axios = require( "axios" ) ;
const cheerio = require( "cheerio" ) ;
const iconv = require( "iconv-lite" ) ;

const patagonia = require( "../model/patagonia.js" ) ;
const url = `http://www.patagonia.co.kr/shop/goods/goods_list.php?&category=003016` ;

module.exports.getList = async() => {
    const getHtml = async() => {
        return await axios.request( {
            method           : "GET",
            url              : url,
            responseType     : "arraybuffer",
            responseEncoding : "binary"
        } ) ;
    } ;
    getHtml().then( html => {
        const $ = cheerio.load( iconv.decode( html.data, "euc-kr" ).toString() ) ;
        const list = $( "#tpl_01 > ul" ).children( "li" ) ;
        list.each( function( i, v ) {
            patagonia.create( {
                id          : v.attribs.id,
                img_src     : $( v ).find( "img" )[0].attribs.src, 
                page        : $( v ).find( ".pname" )[0].attribs.href,
                detail_desc : $( v ).find( ".pname" ).text(),
                price       : $( v ).find( ".fontNanum > .fontArial" ).text(),
                desc        : $( v ).find( ".dscrt_box" ).text().trim()
            } ) ;
        } ) ;
        return 0 ;
    } ).then( () => {
        // ...
    } ).catch( e => {
        console.error( e ) ; 
    } ) ;
}