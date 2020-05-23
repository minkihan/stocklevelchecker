const t = [ "3.55GB", "1.24GB", "3.49GB", "1.11GB", "590.2MB", "990MB" ] ;
const ta = [] ;

t.forEach( ( v, i ) => {
    const size = new Number( v.substr( 0, v.length - 2 ) ) ;
    const mul = v.substr( -2 ) === "GB" ? 1000 : 1 ;
    ta.push( { "size" : size * mul, "index" : i } ) ;
} ) ;

console.log( ta.sort( ( a, b ) => {
    if( a.size > b.size ) {
        return - 1 ;
    }
    if( a.size < b.size ) {
        return 1 ;
    }
    return 0 ;
} ) ) ;

const trc = "transmission-remote -n aya5:ekfqlc99 -a magnet:" ;
const trc_target = "magnet:" ;
const trc_original = "magnet:?xt=urn:btih:30A79F57D0E8BDB1BBFEFA648A571064D5EDC183&dn=SGA-142.mp4" ;

console.log( trc_original.replace( trc_target, trc ) ) ;

console.warn( 1234 ) ;