const getDetail = ( j, $ ) => {
    try {
        // detail 와꾸 읽기
        j.img = $( ".bigImage" ).prop( "href" ) ;
        j.maker = $( $( ".col-md-3.info > p > a" )[ 1 ] ).text() ;

        // magnet 영역
        const tr_list = $( "#magnet-table tr" ) ;
        for( const tr of tr_list ) {
            const td_list = $( tr ).find( "td" ) ;
            let magnet = {} ;
            td_list.map( ( i, td ) => {
                // 가끔 내용 없이 광고가 있는 행이 있음 걸러버려~
                if( $( td ).find( "a" ).text().trim() != "" ) {
                    magnet.link = $( td ).find( "a" )[ 0 ]?.attribs?.href ;
                    if( i == 0 ) magnet.name = $( td ).find( "a" ).text().trim() ;
                    if( i == 1 ) magnet.size = $( td ).find( "a" ).text().trim() ;
                    if( i == 2 ) magnet.date = $( td ).find( "a" ).text().trim() ;
                }
            } ) ;
            if( Object.keys( magnet ).length > 0 ) j.magnet.push( magnet ) ;
        }
        // magnet 영역 end

        // 용량 비교
        const ta = [] ;
        j.magnet.map( ( v, i ) => {
            if( v.size === undefined ) return ;
            const size = new Number( v.size.substr( 0, v.size.length - 2 ) ) ;
            const mul = v.size.substr( - 2 ) === "GB" ? 1000 : 1 ;
            ta.push( { "size" : size * mul, "index" : i, "name" : v.name } ) ;
            v.sizeh = size * mul ;
        } ) ;
        ta.sort( ( a, b ) => {
            if( a.size > b.size ) return - 1 ;
            if( a.size < b.size ) return 1 ;
            return 0 ;
        } )
        // 용량 비교 end

        // 우선순위
        // 1. mp4
        // 2. 용량 큰 것
        // 3. mp4 보다 20% 이상 큰 놈이 있으면 우선순위 up
        let picked_index = 0 ;
        let picked_size = 0 ;
        let picked = false ;
        // 가장 용량 큰 mp4 체크
        for( const v of ta ) {
            if( ! picked && v.name.indexOf( ".mp4" ) > - 1 ) {
                picked_index = v.index ;
                picked_size = v.size ;
                picked = true ;
            }
        }
        
        //console.log( picked_index, picked_size, picked_size * 1.1 ) ;
        // 가장 큰 mp4 보다 20% 이상 큰 놈 있는지 찾기
        for( const v of ta ) {
            if( v.size > picked_size * 1.2 ) {
                picked_index = v.index ;
                picked_size = v.size ;
            }
        }

        // 픽된 항목 크기의 80% 이내에서 이름이 전부 소문자면서 픽된 항목이 대문자일 때.. --;;;
        for( const v of ta ) {
            //console.log( v.size, picked_size * 0.8, v.name.toUpperCase() != v.name, v.name.toUpperCase(), v.name ) ;
            if( v.size >= picked_size * 0.8 ) {
                if( v.name.toUpperCase() != v.name ) {
                    if( v.name.toUpperCase() == j.magnet[ picked_index ].name ) {
                        picked_index = v.index ;
                        picked_size = v.size ;
                    }
                }
            }
        }

        // 우선 순위 magnet 링크 출력
        const link = j.magnet[ picked_index ]?.link ;
        link ? console.log( link ) : console.error( j.href ) ;
    } catch( e ) {
        console.error( e, j ) ;
    }
} ;

export { getDetail }