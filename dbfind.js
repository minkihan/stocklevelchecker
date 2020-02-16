const mongoose = require( "mongoose" ) ;
const javloggerSchema = require( "./javlogger.js" ) ;
const javlogger = mongoose.model( "javlogger", javloggerSchema, "javlogger" ) ;
const findjavlogger = async() => {
    console.log( "### findjavlogger" ) ;
    javlogger.find( {}, function( err, docs ) {
        docs.forEach( function( i, v ) {
            console.log( i.date, i.name ) ;
        } ) ;
    } ) ;
} ;

module.exports = findjavlogger ;