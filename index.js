var express = require("express");
var app = express();
const fs = require('fs');

let rawdata = fs.readFileSync('/Users/atulkaushik/Desktop/Chalu/server_files/atrributes.json');
let student = JSON.parse(rawdata);

app.use(express.json());

app.post('/getdataforfrontend', function(request, response){
  console.log(student);      // your JSON
   response.send(student);    // echo the result back
});



app.get("/postdataforfrontend", (req, res, next) => {
    console.log(res);
   });
   app.listen(3000, () => { 
    console.log("Server running on port 3000");
   });

// var url = 'http://graph.facebook.com/517267866/?fields=picture';

// app.get(url, function(res){
//     var body = '';

//     res.on('data', function(chunk){
//         body += chunk;
//     });

//     res.on('end', function(){
//         var fbResponse = JSON.parse(body);
//         console.log("Got a response: ", fbResponse.picture);
//     });
// }).on('error', function(e){
//       console.log("Got an error: ", e);
// });

