import { fahrenheitToCelsiusCall } from './tempConvertClient';

export const fahrenheitToCelsius = async tempFahrenheit =>
  (await fahrenheitToCelsiusCall(tempFahrenheit)).FahrenheitToCelsiusResult;
