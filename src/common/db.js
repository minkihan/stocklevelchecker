const mongoose = require( "mongoose" ) ;

// connect to mongodb
module.exports.getconnection = async() => { 
    log( "### getconnection" ) ;
    const connector = mongoose.connect( 
        "mongodb://localhost:27017/test", {
            useUnifiedTopology: true
            , useNewUrlParser : true
        } ) ;
} ;

/*
const db = mongoose.connection ;
const handleOpen = () => console.log( "connected to db" ) ;
const handleError = ( err ) => console.log( "error on db connection : ${err}" ) ;
db.once( "open", handleOpen ) ;
db.on( "error", handleError ) ;

; ( async () => {
    console.log( "started..." ) ;
    await getconnection() ;
    //await createjavlogger( "kahoo" ) ;
    await findjavlogger() ;
} ) ()
*/