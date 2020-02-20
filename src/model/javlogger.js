const mongoose = require( "mongoose" ) ;
const db = require( "../common/db.js" ) ;

const javloggerschema = mongoose.Schema( {
    name : String
    , date : Date
} ) ;
const javloggermodel = mongoose.model( "javlogger", javloggerschema, "javlogger" ) ;

// create document
module.exports.create = async function( name ) {
    log( "### create javloggermodel" ) ;
    return new javloggermodel( {
        name : name
        , date : Date.now()
    } ).save() ;
} ;
// find document
module.exports.find = async() => {
    log( "### find javloggermodel" ) ;
    javloggermodel.find( {}, function( err, docs ) {
        docs.forEach( function( i, v ) {
            log( i.date, i.name ) ;
        } ) ;
    } ) ;
} ;
