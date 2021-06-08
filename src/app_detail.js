import * as GetHtmlPuppeteer from "./service/GetHtmlPuppeteer.js" ;
import * as Detail from "./service/ParseDetail.js" ;

( async () => {
    const j = { "href" : `https://www.javbus.com/${process.argv[2]}`
        , "magnet" : [] } ;
    const $$ = await GetHtmlPuppeteer.getHtml( j.href ) ;
    Detail.getDetail( j, $$ ) ;
} )() ; 