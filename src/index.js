const service1 = require('./example1/tempConvertService');
service1.fahrenheitToCelsius(32).then(temperature => console.log('Example1: 32 fahrenheit is ' + temperature + ' celsius'));
service1.celsiusToFahrenheit(0).then(temperature => console.log('Example1: 0 celsius is ' + temperature + ' fahrenheit'));

const service2 = require('./example2/tempConvertService');
service2.fahrenheitToCelsius(32).then(temperature => console.log('Example2: 32 fahrenheit is ' + temperature + ' celsius'));
service2.celsiusToFahrenheit(0).then(temperature => console.log('Example2: 0 celsius is ' + temperature + ' fahrenheit'));
