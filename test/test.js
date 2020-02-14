/* eslint-env node, mocha */
import searchquire from 'searchquire';
import { assert } from 'chai';
import HttpMock from './mocks/HttpMock';
import { createSoapXmlString } from './utils/soapUtils';

const requestData = createSoapXmlString(
  <FahrenheitToCelsius xmlns="https://www.w3schools.com/xml/">
    <Fahrenheit>32</Fahrenheit>
  </FahrenheitToCelsius>
);

const responseData = createSoapXmlString(
  <FahrenheitToCelsiusResponse xmlns="https://www.w3schools.com/xml/">
    <FahrenheitToCelsiusResult>0</FahrenheitToCelsiusResult>
  </FahrenheitToCelsiusResponse>
);

const request2Data = createSoapXmlString(
  <CelsiusToFahrenheit xmlns="https://www.w3schools.com/xml/">
    <Celsius>0</Celsius>
  </CelsiusToFahrenheit>
);

const response2Data = createSoapXmlString(
  <CelsiusToFahrenheitResponse xmlns="https://www.w3schools.com/xml/">
    <CelsiusToFahrenheitResult>32</CelsiusToFahrenheitResult>
  </CelsiusToFahrenheitResponse>
);

describe('Searchquire tests examples', () => {
  describe('Example 1 - Simple es5 implementation', () => {
    it('Service method fahrenheitToCelsius should return 0', async () => {
      const httpsMock = new HttpMock(responseData);
      const service = searchquire('../src/example1/tempConvertService', {
        https: httpsMock
      });

      const temperature = await service.fahrenheitToCelsius(32);

      assert.equal(httpsMock.requestData, requestData);
      assert.equal(temperature, 0);
    });

    it('Service method celsiusToFahrenheit should return 32', async () => {
      const httpsMock = new HttpMock(response2Data);
      const service = searchquire('../src/example1/tempConvertService', {
        https: httpsMock
      });

      const temperature = await service.celsiusToFahrenheit(0);

      assert.equal(httpsMock.requestData, request2Data);
      assert.equal(temperature, 32);
    });
  });

  describe('Example 2 - Refactored es6 implementation', () => {
    it('Service method fahrenheitToCelsius should return 0', async () => {
      const httpsMock = new HttpMock(responseData);
      const service = searchquire('../src/example2/tempConvertService', {
        https: httpsMock
      });

      const temperature = await service.fahrenheitToCelsius(32);

      assert.equal(httpsMock.requestData, requestData);
      assert.equal(temperature, 0);
    });

    it('Service method celsiusToFahrenheit should return 32', async () => {
      const httpsMock = new HttpMock(response2Data);
      const service = searchquire('../src/example2/tempConvertService', {
        https: httpsMock
      });

      const temperature = await service.celsiusToFahrenheit(0);

      assert.equal(httpsMock.requestData, request2Data);
      assert.equal(temperature, 32);
    });
  });
});
