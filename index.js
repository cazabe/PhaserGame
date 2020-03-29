3000; //Specify a port for our web server
const express = require('express'); //load express with the use of requireJs

const app = express(); //Create an instance of the express library

let port = process.env.PORT;

  if (port == null || port == "") {
    port = 3000;
  }

app.use(express.static(__dirname + '/'));//Serving static files

app.listen(port, function() { //Listener for specified port
    console.log("Server running at: http://localhost:" + port)
});