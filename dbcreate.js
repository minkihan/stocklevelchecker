const mongoose = require( "mongoose" ) ;
const javloggerSchema = require( "./javlogger.js" ) ;
const javlogger = mongoose.model( "javlogger", javloggerSchema, "javlogger" ) ;

async function createjavlogger( name ) {
    return new javlogger( {
        name : name
        , date : Date.now()
    } ).save() ;
} ;

module.exports = createjavlogger ;