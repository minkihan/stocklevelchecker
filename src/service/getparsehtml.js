const axios = require( "axios" ) ;
const cheerio = require( "cheerio" ) ;

const domain = "https://www.javbus.com/ko/" ;
module.exports.getDetail = async( url ) => {
    const getHtml = async( url ) => {
        try {
            return await axios.get( url ) ;
        } catch( e ) {
            console.error( e ) ;
        }
    } ;
    const urlMap = 
        url.map( async( e, i ) => {
            // getHtml이 async 함수니까 await 필요함
            await getHtml( e.href ).then( html => {
                const $ = cheerio.load( html.data ) ;
                const bigImage = $( ".row.movie" ).find( ".bigImage" ).prop( "href" ) ;
                url[i].bigImage = bigImage ;
                //log( "###1", url ) ;
            } ).catch( err => {
                log( err ) ; 
            } ) ;
        } ) ;
    
    // 모든 promise await
    await Promise.all( urlMap ) ;
    log( "###2", url ) ;
    return url ;
}

module.exports.getList = i => {
    const getHtml = async( i ) => {
        try {
            let page = `https://www.javbus.com/ko/page/${i}` ;
            return await axios.get( page ) ;
        } catch( e ) {
            console.error( e ) ;
        }
    } ;
    getHtml( i ).then( html => {
        const $ = cheerio.load( html.data ) ;
        const list = $( "#waterfall" ).children( ".item" ) ;
        const url = [] ;
        list.each( function( i, v ) {
            const os = $( this ).find( ".movie-box" ).prop( "href" ) ;
            url.push( {
                seq : os.replace( domain, "" )
                , href : os 
            } ) ;
        } ) ;
        return url ;
    } ).then( url => {
        exports.getDetail( url ).then( url => {
            log( "###3", url ) ;
        } ) ;
    } ).catch( e => {
        log( e ) ; 
    } ) ;
}