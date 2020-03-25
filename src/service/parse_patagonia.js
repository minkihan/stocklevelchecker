// web special discount ...
// http://www.patagonia.co.kr/shop/goods/goods_list.php?category=006011


const axios = require( "axios" ) ;
const cheerio = require( "cheerio" ) ;
const patagonia = require( "../model/patagonia.js" ) ;

const iconv = require( "iconv-lite" ) ;
//var Iconv = require('iconv').Iconv; 
//var iconv = new Iconv('EUC-KR', 'UTF-8//TRANSLIT//IGNORE');

//const detectCharacterEncoding = require('detect-character-encoding');

const domain = `http://www.patagonia.co.kr/shop/goods/goods_list.php?&category=003016` ;
module.exports.getList = async() => {
    const getHtml = async() => {
        return await axios.request( {
            method: "GET"
            , url: domain
            , responseType: "arraybuffer"
            , responseEncoding: "binary"
            } ) ;
        
        try {
            let page = domain ;
            return await axios.get( page, {
                responseEncoding : "utf8"
            } ) ;
        } catch( e ) {
            console.error( e ) ;
        }
    } ;
    getHtml().then( html => {
        const $ = cheerio.load( iconv.decode( html.data, "euc-kr" ).toString() ) ;
        const list = $( "#tpl_01 > ul" ).children( "li" ) ;
        list.each( function( i, v ) {
            /*
            patagonia.create( {
                id : v.attribs.id
                , img_src : $( v ).find( "img" )[0].attribs.src 
                , page : $( v ).find( ".pname" )[0].attribs.href
                , detail_desc : $( v ).find( ".pname" ).text()
                , price : $( v ).find( ".fontNanum > .fontArial" ).text()
            } ) ;
            */

            const x = {
                id : v.attribs.id
                , img_src : $( v ).find( "img" )[0].attribs.src 
                , page : $( v ).find( ".pname" )[0].attribs.href
                , detail_desc : $( v ).find( ".pname" ).text()
                , price : $( v ).find( ".fontNanum > .fontArial" ).text()
                , desc : $( v ).find( ".dscrt_box" ).text().trim()
            } ;
            log( x ) ;
        } ) ;
        return 0 ;
    } ).then( url => {
        //exports.getDetail( url ).then( url => {
        //   log( "###3", url ) ;
        //} ) ;
    } ).catch( e => {
        log( e ) ; 
    } ) ;
}