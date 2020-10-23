/**
 * puppeteer.js 테스트.. 
 * internal-chromium 사용하여 웹 페이지 로딩함 느림
 */

const puppeteer = require( "puppeteer" ) ;
const cheerio = require( "cheerio" ) ;

const getPage = async () => {
    const browser = await puppeteer.launch() ;
    const page = await browser.newPage() ;
    await page.goto( "https://www.javbus.com/ko/TSF-006" ) ;
    const pageModel = await page.$( "html" ) ;
    const content = await pageModel.evaluate( body => body.innerHTML ) ;
    const $ = await cheerio.load( content ) ;
    browser.close() ;
    return $ ;
}

getPage().then( $ => {
    const tr_list = $( "#magnet-table tr" ) ;
    //console.log( tr_list ) ;
    tr_list.each( function( i, v ) {
       // console.log( i, v ) ;
        const td_list = $( v ).find( "td" ) ;
        let magnet = {} ;
        let c = 1 ;
        td_list.each( function( ii, vv ) { 
            //console.log( ii, vv ) ;
            if( $( vv ).find( "a" ).text().trim() != "" ) {
                if( ii == 0 ) magnet.name = $( vv ).find( "a" ).text().trim() ;
                if( ii == 0 ) magnet.link = $( vv ).find( "a" )[0].attribs.href ;
                if( ii == 1 ) magnet.size = $( vv ).find( "a" ).text().trim() ;
                if( ii == 2 ) magnet.date = $( vv ).find( "a" ).text().trim() ;
            }
        } ) ;
        console.log( magnet ) ;
    } ) ;
    
} ) ;