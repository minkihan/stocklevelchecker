//const axios = require( "axios" ) ;
const puppeteer = require( "puppeteer" ) ;
const cheerio = require( "cheerio" ) ;
//const iconv = require( "iconv-lite" ) ;
const jav = require( "../model/jav.js" ) ;
const jav_detail= require( "./parse_jav_detail.js" ) ;

const a = [] ;
module.exports.getList = async( page ) => {
    console.log( "page", page ) ;
    const url = `https://www.javbus.com/ko/page/${page}` ;
    //const url = `https://www.javbus.com/ko/uncensored/page/${page}`
    const getHtml = async() => {
        const browser = await puppeteer.launch() ;
        const page = await browser.newPage() ;
        await page.goto( url ) ;
        const pageModel = await page.$( "html" ) ;
        const content = await pageModel.evaluate( body => body.innerHTML ) ;
        browser.close() ;
        const $ = await cheerio.load( content ) ;
        return $ ;
    } ;
    getHtml().then( $ => {
        //console.log( html ) ;
        //const $ = cheerio.load( html.data ) ;
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
                //console.log( j.title ) ;
                jav_detail.getDetail( j ) ;
            // every 10 seconds
            }, i * 1000 * 10 ) ;
        } ) ;
    } ).then( () => {
        
    } ).catch( e => {
        console.error( e ) ; 
    } ) ;
}
