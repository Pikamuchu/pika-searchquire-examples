import { soapCall } from './soapUtils';

export const fahrenheitToCelsiusCall = async tempFahrenheit =>
  (
    await temperatureConvertCall(
      createSoapParams('FahrenheitToCelsius'),
      <FahrenheitToCelsius xmlns="https://www.w3schools.com/xml/">
        <Fahrenheit>{tempFahrenheit}</Fahrenheit>
      </FahrenheitToCelsius>
    )
  ).FahrenheitToCelsiusResponse;

export const celsiusToFahrenheitCall = async tempCelsius =>
  (
    await temperatureConvertCall(
      createSoapParams('CelsiusToFahrenheit'),
      <CelsiusToFahrenheit xmlns="https://www.w3schools.com/xml/">
        <Celsius>{tempCelsius}</Celsius>
      </CelsiusToFahrenheit>
    )
  ).CelsiusToFahrenheitResponse;

const createSoapParams = action => ({
  hostname: 'www.w3schools.com',
  port: 443,
  path: '/xml/tempconvert.asmx',
  method: 'POST',
  headers: {
    'Content-Type': 'application/soap+xml; charset=utf-8',
    SOAPAction: `https://www.w3schools.com/xml/${action}`
  }
});

const temperatureConvertCall = async (soapParams, soapData) => {
  let response;
  try {
    response = await soapCall(soapParams, soapData);
  } catch (e) {
    console.log('Error ' + e);
  }
  return response;
};
