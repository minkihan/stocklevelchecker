const mongoose = require( "mongoose" ) ;

const jav_schema = mongoose.Schema( {
    id          : String,
    img_src     : String
} ) ;
const jav_model = mongoose.model( "test", jav_schema, "test" ) ;

// create document
module.exports.create = async function( jav ) {
    log( "### create jav product model" ) ;
    return new jav_model( jav ).save() ;
} ;

// find document
module.exports.find = async() => {
    log( "### find jav product model" ) ;
    jav_model.find( {}, function( err, docs ) {
        docs.forEach( function( i, v ) {
            log( i.id, i.img_src ) ;
        } ) ;
    } ) ;
} ;
