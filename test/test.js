/* eslint-env node, mocha */
import searchquire from 'searchquire';
import { assert } from 'chai';

const httpStub = {
  request: function(options, callback) {
    let onData;
    const response = {
      on: function (event, onDataFunction) {
        onData = onDataFunction;
      }
    }
    callback(response);
    onData(data);
    return {
      write: function() {},
      end: function() {},
    };
  }
};

const testConfig = {
  moduleStubs: {
    'http': httpStub
  }
};

describe('Searchquire examples', () => {
  describe('Temperature convert service', () => {
    it('Example 1 - Simple implementation es5', async () => {
      const service = searchquire('../src/example1/tempConvertService', testConfig);
      const temperature = await service.fahrenheitToCelsius(32);
      assert.equal(temperature, 0);
    });
    it('Example 2 - Simple implementation es6', async () => {
      const service = searchquire('../src/example2/tempConvertService', testConfig);
      const temperature = await service.fahrenheitToCelsius(32);
      assert.equal(temperature, 0);
    });
    it('Example 3 - Refactored implementation', async () => {
      const service = searchquire('../src/example3/tempConvertService', testConfig);
      const temperature = await service.fahrenheitToCelsius(32);
      assert.equal(temperature, 0);
    });
  });
});



