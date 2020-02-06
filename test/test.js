/* eslint-env node, mocha */
import searchquire from 'searchquire';
import { assert } from 'chai';
import HttpMock from './mocks/HttpMock';

const responseData = (
  <soap:Envelope
    xmlns:soap="http://www.w3.org/2003/05/soap-envelope"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:xsd="http://www.w3.org/2001/XMLSchema"
  >
    <soap:Body>
      <FahrenheitToCelsiusResponse xmlns="https://www.w3schools.com/xml/">
        <FahrenheitToCelsiusResult>0</FahrenheitToCelsiusResult>
      </FahrenheitToCelsiusResponse>
    </soap:Body>
  </soap:Envelope>
).toXMLString();

describe('Searchquire examples', () => {
  describe('Temperature convert service', () => {
    it('Example 1 - Simple es5 implementation should return 0', async () => {
      const service = searchquire('../src/example1/tempConvertService', {
        https: new HttpMock(responseData)
      });
      const temperature = await service.fahrenheitToCelsius(32);
      assert.equal(temperature, 0);
    });
    it('Example 2 - Refactored es6 implementation should return 0', async () => {
      const service = searchquire('../src/example2/tempConvertService', {
        https: new HttpMock(responseData)
      });
      const temperature = await service.fahrenheitToCelsius(32);
      assert.equal(temperature, 0);
    });
  });
});
