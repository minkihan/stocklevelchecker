import axios from "axios" ;
import * as cheerio from "cheerio" ;

// axios 로 페이지 조회 (ajax 없음)
const getHtml = async( url ) => {
    const html = await axios.request( {
        method : "GET"
        , url : url
    } ) ;
    return cheerio.load( html.data ) ;
} ;

export { getHtml }