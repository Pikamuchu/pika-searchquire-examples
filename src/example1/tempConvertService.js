var https = require('https');

export function fahrenheitToCelsius(tempFahrenheit) {
  return new Promise(function (resolve) {
    var req = https.request(
      {
        hostname: 'www.w3schools.com',
        port: 443,
        path: '/xml/tempconvert.asmx',
        method: 'POST',
        headers: {
          'Content-Type': 'text/xml',
          SOAPAction: 'https://www.w3schools.com/xml/FahrenheitToCelsius'
        }
      },
      function (res) {
        res.on('data', function (data) {
          resolve(/\<FahrenheitToCelsiusResult\>(\d)\<\/FahrenheitToCelsiusResult\>/.exec(data)[1]);
        });
      }
    );
    req.write(
      '<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">' +
      '  <soap12:Body>' +
      '    <FahrenheitToCelsius xmlns="https://www.w3schools.com/xml/">' +
      '      <Fahrenheit>' + tempFahrenheit + '</Fahrenheit>' +
      '    </FahrenheitToCelsius>' +
      '  </soap12:Body>' +
      '</soap12:Envelope>'
    );
    req.end();
  });
}
