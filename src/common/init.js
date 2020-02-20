global.log = console.log ;

const db = require( "./db.js" ) ;

module.exports.start = async() => {
    db.getconnection() ;
}