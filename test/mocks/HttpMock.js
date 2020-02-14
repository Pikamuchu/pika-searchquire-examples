import XML from 'simple4x';

export default class HttpMock {
  constructor(responseData) {
    this.requestData = null;
    this.responseData = responseData;
    this.options = null;
  }

  request(options, callback) {
    this.options = options;
    let onDataFunction;
    const response = {
      on: (event, paramFunction) => {
        onDataFunction = paramFunction;
      }
    }
    callback(response);
    onDataFunction(this.responseData);
    return {
      on: () => {},
      write: (requestData) => {
        this.requestData = new XML(requestData).toXMLString();
      },
      end: () => {}
    };
  }
}
