/**
 * filter.js 수동으로 테스트하기 
 */

const filter = require( "../filter/filter.js" ) ;
const filter_test = ( file ) => {
    let ext = "" ;
    if( file.split( ".mp4" ).length > 1 ) {
        ext = ".mp4" ;
    } else if( file.split( ".mkv" ).length > 1 ) {
        ext = ".mkv" ;
    }
    const pt = file.split( ext ) ;
    let st = pt[0].toUpperCase() ;
    filter.filter().forEach( ( v, i ) => {
        st = st.replace( v, "" ) ;
    } ) ;
    filter.filter2().forEach( ( v, i ) => {
        st = st.replace( v.match, v.replace ) ;
    } ) ;
    filter.filter3().forEach( ( v, i ) => {
        st = st.replace( v.match, v.replace ) ;
    } ) ;
    const h = /00([0-9]+[0-9]+)/ ;
    if( h.test( st ) ) {
        st = st.replace( "00", "-" ) ;
    }
    const h2 = /([a-zA-Z]*)-([0-9]*)/ ;
    const h3 = /([a-zA-Z]*)([0-9]*)/ ;
    if( ! h2.test( st ) ) {
        const h3r = h3.exec( st ) ;
        st = h3r[1] + "-" + h3r[2] ;
    }
    console.log( st + ext ) ;
}

// test file name
const file = [ 
    "idbd00982A.mp4"
    , "tenx19012..mp4"
    , "ppbd00197A.mp4"
    , "big2048.com@MRSC-006.mp4"
    , "CBIKMV-100_4K-B.mp4"
    , "EBVR-018-B.mp4"
    , "dinm00587A..mp4"
    , "bbtu00001..mp4"
    , "bda00129..mp4"
    , "OFJE-276CD1-A.mp4"
    , "mkck00269a..mp4"
    , "hdka00217.mp4"
    , "Unhinged.2020.2160p.BluRay.REMUX.HEVC.DTS-HD.MA.TrueHD.7.1.Atmos-FGT.mkv"
    , "esk-316ch.mp4"
    , "idbd00982A.mp4"
    , "akdl00066..mp4"
 ] ;
file.forEach( ( v, i ) => {
    filter_test( v ) ;
} ) ;