const mongoose = require( "mongoose" ) ;

// connect to mongodb
module.exports.getconnection = async() => { 
    log( "### getconnection" ) ;
    const connector = mongoose.connect( 
        "mongodb://localhost:27017/stocklevelchecker", {
        //"mongodb+srv://aya5:wsmAOXLuzJd9Lgxo@cluster0-mpntl.gcp.mongodb.net/test?retryWrites=true&w=majority", {
            useUnifiedTopology : true,
            useNewUrlParser    : true
        } ) ;
    
    const db = mongoose.connection ;
    db.once( "open", () => console.log( "### getconnection complete" ) ) ;
    db.on( "error", ( e ) => console.error( `error on getconnection : ${e}` ) ) ;
} ;
