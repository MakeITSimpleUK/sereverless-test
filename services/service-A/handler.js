'use strict';
const { uuid } = require('uuidv4');
var _ = require('lodash')
module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless service A v1.4! Your function executed successfully!',
        uuid:uuid()
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
