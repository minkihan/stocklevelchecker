global.log = console.log ;

const db = require( "./db.js" ) ;
const jav = require( "../model/jav.js" ) ;

//module.exports.start = async() => {
    db.getconnection() ;
//}


const testobj = { id : "0001", img_src : "test.html" } ;

jav.create( testobj ) ;
jav.find( testobj ) ;