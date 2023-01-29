const logger = require("morgan");
//set up the server
const express = require( "express" );
const app = express();
const port = 8080;
const db = require("./db/db_connection");

// define middleware that logs all incoming requests
app.use(logger("dev"));
// define middleware that serves static resources in the public directory
app.use(express.static(__dirname + '/public'));

// define a route for the default home page
app.get( "/", ( req, res ) => {
    res.sendFile( __dirname + "/views/index1.html" );
} );

// define a route for the stuff inventory page
app.get( "/stuff", ( req, res ) => {
    //db.execute('SELECT id,item,quantity FROM stuff',(error,results)=> {
    //if(error) {
    // res.status(500).send(error);
    //} else {
    //    res.send(results);
    //}
    //}
    res.sendFile( __dirname + "/views/classes.html" );
} );

// define a route for the item  page
app.get( "/stuff/item", ( req, res ) => {
    //db.execute('SELECT id,item,quantity FROM stuff WHERE id=0',(error,results)=> {
    //if(error) {
    // res.status(500).send(error);
    //} else {
    //    res.send(results);
    //}
    //}
    res.sendFile( __dirname + "/views/assignments.html" );
} );

// define a route for the item detail page
app.get( "/stuff/item/details", ( req, res ) => {
    res.sendFile( __dirname + "/views/assignment_details.html" );
} );


//start the server
app.listen( port, () => {
    console.log(`App server listening on ${ port }. (Go to http://localhost:${ port })` );
} );
