const Clarifai = require('clarifai');
const Key = require('../config/key.js')

const app = new Clarifai.App({
  apiKey: Key.API
});

export const predict = (query) => {
  return app.models.predict(Clarifai.GENERAL_MODEL, query).then(
    function(response) {
      return response;
    },
    function(err) {
      console.log(err);
    }
  )
};
