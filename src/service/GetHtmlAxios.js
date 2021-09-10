const axios = require( "axios" ) ;
const cheerio = require( "cheerio" ) ;

// axios 로 페이지 조회 (ajax 없음)
const getHtml = async ( url ) => {
    let html ;
    try {
        html = await axios.request( {
            "method" : "GET"
            , "timeout" : 1000 * 60 * 5
            , url
        } ) ;
    } catch ( e ) {
        //console.log( "e >>> ", e ) ;
    }
    return cheerio.load( html.data ) ;
} ;

module.exports = {
    getHtml
}