const mongoose = require( "mongoose" ) ;
const db = require( "../common/db.js" ) ;

const patagonia_schema = mongoose.Schema( {
    id : String
    , img_src : String
    , page : String
    , detail_desc : String
    , price : String
} ) ;
const patagonia_model = mongoose.model( "patagonia", patagonia_schema, "patagonia" ) ;

// create document
module.exports.create = async function( patagonia ) {
    log( "### create patagonia product model" ) ;
    return new patagonia_model( patagonia ).save() ;
} ;

// find document
module.exports.find = async() => {
    log( "### find patagonia product model" ) ;
    patagonia_model.find( {}, function( err, docs ) {
        docs.forEach( function( i, v ) {
            log( i.id, i.img_src ) ;
        } ) ;
    } ) ;
} ;
