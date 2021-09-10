const GetHtmlPuppeteer = require( "./service/GetHtmlPuppeteer.js" ) ;
const ParseDetail = require( "./service/ParseDetail.js" ) ;

( async () => {
    const j = { "href" : `https://www.javbus.com/${ process.argv[ 2 ] }`
        , "magnet" : [] } ;
    const $$ = await GetHtmlPuppeteer.getHtml( j.href ) ;
    ParseDetail.getDetail( j, $$ ) ;
} )() ; 