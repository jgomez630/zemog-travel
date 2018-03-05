var fs = require('fs');
var http = require('http');

// fs.writeFile(__dirname + "/index.html", "<h1>HTML is great</h1>", function(error) {
//   if (error) {
//     return console.log(error);
//   } else {
//     return console.log("Congrats");
//   }
// });

var myPhotoLocation = "http://www.static.sites.yp.com/var/m_e/e5/e50/11186645/1292077-back-gal-1.jpg";

http.get(myPhotoLocation, function(response) {
  response.pipe(fs.createWriteStream(__dirname + "/mydog.jpg"));
});
