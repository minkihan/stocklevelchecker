import axios from "axios" ;
import cheerio from "cheerio" ;
import jav_detail from "./parse_jav_detail_20210603.js" ;

const a = [] ;
const getList = async( page ) => {
    const url = `https://www.javbus.com/ko/page/${page}` ;
    //const url = `https://www.javbus.com/ko/uncensored/page/${page}` ;
    //const url = `https://www.javbus.com/ko/star/85j${page}` ; //yua sakuya
    //const url = `https://www.javbus.com/ko/star/uly/${page}` ; //Suzumori remu
    //const url = `https://www.javbus.com/ko/label/6j0/${page}` ;
    //const url = `https://www.javbus.com/ko/label/6n4/${page}` ;
    
    const getHtml = async() => {
        return await axios.request( {
            method           : "GET",
            url              : url
        } ) ;
    } ;
    getHtml().then( html => {
        //console.log( html ) ;
        const $ = cheerio.load( html.data ) ;
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

export { getList }