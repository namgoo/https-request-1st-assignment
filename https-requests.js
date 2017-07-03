var https = require('https')

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'en.wikipedia.org',
    path: '/wiki/CP_All'
  }
  /* Add your code here */

    https.get(requestOptions, function (response) {
    console.log(response)
    // set encoding of received data to UTF-8
    response.setEncoding('utf8');

    // the callback is invoked when a `data` chunk is received
    response.on('data', function (data) {
      console.log(data + '\n' + "End of Line");
    });

    // the callback is invoked when all of the data has been received
    // (the `end` of the stream)
    response.on('end', function() {
      console.log('Response stream complete.');
  });

});}

getAndPrintHTMLChunks()

