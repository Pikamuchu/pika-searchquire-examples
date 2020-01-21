const service1 = require('./example1/tempConvertService');
service1.fahrenheitToCelsius(32).then(temperature => console.log('Example1: temperature is ' + temperature));

const service2 = require('./example2/tempConvertService');
service2.fahrenheitToCelsius(32).then(temperature => console.log('Example2: temperature is ' + temperature));

const service3 = require('./example3/tempConvertService');
service3.fahrenheitToCelsius(32).then(temperature => console.log('Example3: temperature is ' + temperature));
