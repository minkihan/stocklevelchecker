const GetHtmlAxios = require( "./service/GetHtmlAxios.js" ) ;
const GetHtmlPuppeteer = require( "./service/GetHtmlPuppeteer.js" ) ;
const ParseDetail = require( "./service/ParseDetail.js" ) ;

( async () => {
    const maxPage = 5 ;
    for ( let page = 1 ; page <= maxPage ; page++ ) {
        try {
            const url = `https://www.javbus.com/page/${ page }` ;
            // 1pondo, carib, heyzo
            //const url = `https://www.javbus.com/ko/uncensored/studio/3a/${ page }` ;
            //const url = `https://www.javbus.com/ko/uncensored/studio/3n/${ page }`
            //const url = `https://www.javbus.com/ko/uncensored/studio/3h/${ page }`
            const $ = await GetHtmlAxios.getHtml( url ) ;
            const list = $( "#waterfall > .item > .movie-box" ) ;
            for ( const v of list ) {
                const j = {
                    "href": v.attribs.href
                    , "title": $( v ).find( "img" )[ 0 ].attribs.title
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