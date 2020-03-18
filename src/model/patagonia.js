const mongoose = require( "mongoose" ) ;
const db = require( "../common/db.js" ) ;

const patagonia_schema = mongoose.Schema( {
    name : String
    , date : Date
} ) ;
const patagonia_model = mongoose.model( "patagonia", patagonia_schema, "patagonia" ) ;

// create document
module.exports.create = async function( name ) {
    log( "### create patagonia product model" ) ;
    return new patagonia_model( {
        name : name
        , date : Date.now()
    } ).save() ;
} ;
// find document
module.exports.find = async() => {
    log( "### find patagonia product model" ) ;
    patagonia_model.find( {}, function( err, docs ) {
        docs.forEach( function( i, v ) {
            log( i.date, i.name ) ;
        } ) ;
    } ) ;
} ;
