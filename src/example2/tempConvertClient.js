import { soapCall } from './soapUtils';

export const fahrenheitToCelsiusCall = async tempFahrenheit => {
  let response;
  try {
    response = (
      await soapCall(createFahrenheitToCelsiusSoapParams(), createFahrenheitToCelsiusSoapData(tempFahrenheit))
    ).FahrenheitToCelsiusResponse;
  } catch (e) {
    console.log('Error ' + e);
  }
  return response;
};

const createFahrenheitToCelsiusSoapParams = () => ({
  hostname: 'www.w3schools.com',
  port: 443,
  path: '/xml/tempconvert.asmx',
  method: 'POST',
  headers: {
    'Content-Type': 'text/xml',
    SOAPAction: 'https://www.w3schools.com/xml/FahrenheitToCelsius'
  }
});

const createFahrenheitToCelsiusSoapData = tempFahrenheit => (
  <FahrenheitToCelsius xmlns="https://www.w3schools.com/xml/">
    <Fahrenheit>{tempFahrenheit}</Fahrenheit>
  </FahrenheitToCelsius>
);
