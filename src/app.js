import * as GetHtmlAxios from "./service/GetHtmlAxios.js" ;
import * as GetHtmlPuppeteer from "./service/GetHtmlPuppeteer.js" ;
import * as ParseDetail from "./service/ParseDetail.js" ;

( async () => {
    const maxPage = 5 ;
    for ( let page = 1 ; page <= maxPage ; page++ ) {
        try {
            const url = `https://www.javbus.com/page/${page}` ;
            const $ = await GetHtmlAxios.getHtml( url ) ;
            const list = $( "#waterfall > .item > .movie-box" ) ;
            for ( const v of list ) {
                const j = {
                    "href": v.attribs.href
                    , "title": $( v ).find( "img" )[0].attribs.title
                    , "magnet": []
                } ;
                const $$ = await GetHtmlPuppeteer.getHtml( j.href ) ;
                ParseDetail.getDetail( j, $$ ) ;
            }
        } catch ( e ) { 
            console.error( e ) ;
        } 
    } 
} )() ;