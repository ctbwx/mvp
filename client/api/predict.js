const Clarifai = require('clarifai');

const app = new Clarifai.App({
  apiKey: 'ca00c83193da4e7cb40223f56123f9e2'
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
