const axios = require( "axios" ) ;
const cheerio = require( "cheerio" ) ;
const iconv = require( "iconv-lite" ) ;
const fs = require( "fs" ) ;
const file = fs.createWriteStream( "/Users/min-kihan/Documents/jav.json" ) ;

const phantom = require( 'phantom' ) ;
let counter = 1 ;

const trc = "transmission-remote -n aya5:ekfqlc99 -a magnet:" ;
const trc_target = "magnet:" ;

module.exports.getDetail = async( j ) => {
    const getHtml = async( j ) => {
        // 여기 로직은 phantom 으로 수정하는게 깔끔할 듯
        return await axios.request( {
            method           : "GET",
            url              : j.href
        } ) ;
    } ;
    getHtml( j ).then( html => {
        // detail 와꾸 읽기
        const $ = cheerio.load( html.data ) ;
        j.img = $( ".bigImage" ).prop( "href" ) ;
        j.maker = $( $( ".col-md-3.info > p > a" )[1] ).text() ;
        return j ;
    } ).then( ( j ) => {
            const ph = async( j ) => {
                //console.log( "#### counter => " + counter++ ) ;
                // ajax 읽기 (phantom)
                const instance = await phantom.create() ;
                const page = await instance.createPage() ;
                // await page.on( 'onResourceRequested', function( requestData ) {
                //     console.info( 'Requesting', requestData.url ) ;
                // } ) ;
            
                const status = await page.open( j.href ) ;
                const content = await page.property( 'content' ) ;
                // ajax 읽기 (phantom) end
                
                // magnet 영역
                const $ = cheerio.load( content ) ;
                const tr_list = $( $( "#magnet-table > tbody" )[1] ).find( "tr" ) ;
                tr_list.each( function( i, v ) {
                    const td_list = $( v ).find( "td" ) ;
                    let magnet = {} ;
                    td_list.each( function( ii, vv ) { 
                        if( ii == 0 ) magnet.name = $( vv ).find( "a" ).text().trim() ;
                        if( ii == 0 ) magnet.link = $( vv ).find( "a" )[0].attribs.href ;
                        if( ii == 1 ) magnet.size = $( vv ).find( "a" ).text().trim() ;
                        if( ii == 2 ) magnet.date = $( vv ).find( "a" ).text().trim() ;
                    } ) ;
                    j.magnet.push( magnet ) ;
                } ) ;
                // magnet 영역 end

                // 용량 비교
                const ta = [] ;
                j.magnet.forEach( ( v, i ) => {
                    const size = new Number( v.size.substr( 0, v.size.length - 2 ) ) ;
                    const mul = v.size.substr( -2 ) === "GB" ? 1000 : 1 ;
                    ta.push( { "size" : size * mul, "index" : i, "name" : v.name } ) ;
                } ) ;
                ta.sort( ( a, b ) => {
                    if( a.size > b.size ) {
                        return - 1 ;
                    }
                    if( a.size < b.size ) {
                        return 1 ;
                    }
                    return 0 ;
                } )
                //console.log( ta ) ;
                // 용량 비교 end

                // 우선순위
                // 1. mp4
                // 2. 용량 큰 것
                // 3. mp4 보다 20% 이상 큰 놈이 있으면 우선순위 up
                let picked_index = 0 ;
                let picked_size = 0 ;
                let picked = false ;
                // 가장 용량 큰 mp4 체크
                ta.forEach( ( v, i ) => {
                    if( ! picked && v.name.indexOf( ".mp4" ) > - 1 ) {
                        picked_index = v.index ;
                        picked_size = v.size ;
                        picked = true ;
                    }
                } ) ;
                //console.log( picked_index, picked_size, picked_size * 1.1 ) ;
                // 가장 큰 mp4 보다 20% 이상 큰 놈 있는지 찾기
                ta.forEach( ( v, i ) => {
                    if( v.size > picked_size * 1.2 ) {
                        picked_index = v.index ;
                        picked_size = v.size ;
                        picked = true ;
                    }
                } ) ;
                //console.log( picked_index, picked_size ) ;
                console.debug( j.magnet[picked_index].link.replace( trc_target, trc ) ) ;
                // 우선순위 end
            
                await instance.exit() ;

                //console.log( j ) ;
                //file.write( JSON.stringify( j ) ) ;
            }
            ( async function( j ) {
                await ph( j ) ;
            } ) ( j ) ;
    } ).catch( e => {
        console.error( e ) ; 
    } ) ;
}