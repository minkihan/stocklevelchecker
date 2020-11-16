const mongoose = require( "mongoose" ) ;

// connect to mongodb
module.exports.getconnection = async() => { 
    log( "### getconnection" ) ;
    const connector = mongoose.connect( 
        "mongodb://221.155.244.246:27017/jav", {
        //"mongodb+srv://aya5:wsmAOXLuzJd9Lgxo@minkihan.mpntl.mongodb.net/jav?retryWrites=true&w=majority", {
            useUnifiedTopology : true,
            useNewUrlParser    : true
        } ) ;
    
    const db = mongoose.connection ;
    db.once( "open", () => console.log( "### getconnection complete" ) ) ;
    db.on( "error", ( e ) => console.error( `error on getconnection : ${e}` ) ) ;
} ;
