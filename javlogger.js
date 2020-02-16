const mongoose = require( "mongoose" ) ;

const javloggerSchema = mongoose.Schema( {
    name : String
    , date : Date
} ) ;

module.exports = javloggerSchema ;