import { fahrenheitToCelsiusCall, celsiusToFahrenheitCall } from './tempConvertClient';

export const fahrenheitToCelsius = async tempFahrenheit =>
  (await fahrenheitToCelsiusCall(tempFahrenheit)).FahrenheitToCelsiusResult;

export const celsiusToFahrenheit = async tempCelsius =>
  (await celsiusToFahrenheitCall(tempCelsius)).CelsiusToFahrenheitResult;
