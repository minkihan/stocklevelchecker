/**
 * filter.js 수동으로 테스트하기 
 */

const filter = require( "../filter/filter.js" ) ;

// test file name
let file = "bstc-046 _ Jav.mp4" ;



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
console.log( st + ext ) ;