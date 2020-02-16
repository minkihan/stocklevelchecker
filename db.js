const mongoose = require( "mongoose" ) ;
const getconnection = async() => {
    console.log( "### getconnection" ) ;
    const connector = mongoose.connect( 
        "mongodb+srv://aya5:wsmAOXLuzJd9Lgxo@mk-cluster-mpntl.gcp.mongodb.net/test?retryWrites=true&w=majority", {
            useNewUrlParser : true
        } ) ;
    /*
    const db = mongoose.connection ;
    const handleOpen = () => console.log( "connected to db" ) ;
    const handleError = ( err ) => console.log( "error on db connection : ${err}" ) ;
    db.once( "open", handleOpen ) ;
    db.on( "error", handleError ) ;
    */
} ;

module.exports = getconnection ;
//

/*
; ( async () => {
    console.log( "started..." ) ;
    await getconnection() ;
    //await createjavlogger( "kahoo" ) ;
    await findjavlogger() ;
} ) ()
*/