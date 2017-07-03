var https = require('https')

function getAndPrintHTMLChunks (host, path) {
  var awesome = "";

  var requestOptions = {
    'host': host,
    'path': path
  };

  https.get(requestOptions, function (response) {

    // set encoding of received data to UTF-8
    response.setEncoding('utf8');

    // the callback is invoked when a `data` chunk is received
    response.on('data', function (data) {
      awesome += data
      // console.log(data + '\n' + "End of Line");
      // console.log(typeof data)
      // awesome.push(data)
    });
    // the callback is invoked when all of the data has been received
    // (the `end` of the stream)
    response.on('end', function() {
      // console.log('Response stream complete.');

    console.log(awesome);
    });

  })

}

getAndPrintHTMLChunks('sytantris.github.io', '/http-examples/step3.html')

//   var requestOptions = {
//     host: 'sytantris.github.io',
//     path: '/http-examples/step3.html'
//   };
//   /* Add your code here */


// getAndPrintHTMLChunks(requestOptions)



// function getAndPrintHTMLChunks2 (options) {
//   var awesome = [];
//   https.get(options, function (response) {
//     // set encoding of received data to UTF-8
//     response.setEncoding('utf8');
//     // the callback is invoked when a `data` chunk is received
//     response.on('data', function (data) {
//       awesome.push(data)
//       // console.log(data + '\n' + "End of Line");
//       // console.log(typeof data)
//       // awesome.push(data)
//     });
//     // the callback is invoked when all of the data has been received
//     // (the `end` of the stream)
//     response.on('end', function() {
//       // console.log('Response stream complete.');

//     console.log(awesome);
//     });

//   })

// }

// getAndPrintHTMLChunks2('sytantris.github.io/http-examples/step3.html') <-- The function is not sure where domain name starts/ends,
//                                                                            Therefore, an object is needed.
