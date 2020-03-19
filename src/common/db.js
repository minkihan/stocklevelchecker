/*
    docker run mongo
    docker run --name mongo -p 27017:27017 -d mongo

    mongo in docker specify store data
    docker run --name mongo -p 27017:27017 -v /Users/min-kihan/Documents/__db:/data/db -d mongo
*/

const mongoose = require( "mongoose" ) ;

// connect to mongodb
module.exports.getconnection = async() => { 
    log( "### getconnection" ) ;
    const connector = mongoose.connect( 
        //"mongodb://localhost:27017/stocklevelchecker", {
        "mongodb+srv://aya5:wsmAOXLuzJd9Lgxo@mk-cluster-mpntl.gcp.mongodb.net/test?retryWrites=true&w=majority", {
            useUnifiedTopology: true
            , useNewUrlParser : true
        } ) ;
    
    const db = mongoose.connection ;
    db.once( "open", () => console.log( "### getconnection complete" ) ) ;
    db.on( "error", ( e ) => console.error( `error on getconnection : ${e}` ) ) ;
} ;
