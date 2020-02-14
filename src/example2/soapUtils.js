import https from 'https';
import XML from 'simple4x';

export const soapCall = (params, soapData) => {
  return new Promise(function(resolve, reject) {
    const req = https.request(params, function(res) {
      if (res.statusCode < 200 || res.statusCode >= 300) {
        return reject(new Error('statusCode=' + res.statusCode));
      }
      res.on('data', data => {
        const response = new XML(data);
        resolve(response['soap12:Body'] || response['soap:Body']);
      });
    });
    req.on('error', function(err) {
      reject(err);
    });
    if (soapData) {
      req.write(createSoapRequest(soapData).toXMLString());
    }
    req.end();
  });
};

const createSoapRequest = soapData => (
  <soap12:Envelope
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:xsd="http://www.w3.org/2001/XMLSchema"
    xmlns:soap12="http://www.w3.org/2003/05/soap-envelope"
  >
    <soap12:Body>{soapData}</soap12:Body>
  </soap12:Envelope>
);
