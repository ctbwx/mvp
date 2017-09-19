const express = require('express');
const browserify = require('browserify-middleware');
const path = require('path');
const Clarifai = require('clarifai');

let app = express();
let machine = Clarifai

app.get('/bundle.js', browserify('./client/index.js', {
  transform : [ [ require('babelify'), {presets: ['es2015', 'react'] } ] ]
}));

app.use(express.static(path.join(__dirname, './client')));

app.use('/style.css', function(req, res) {
  res.sendFile(path.join(__dirname, 'style.css'));
});

//----------------------ROUTES-----------------------------//
app.get('/api', function(req, res) {
  return app.models.predict(Clarifai.GENERAL_MODEL, image).then(
  function(response) {
    res.send(response.outputs[0].data.concepts.map(i => i.name))
  },
  function(err) {
    console.log(err);
  })
});


//----------------------ROUTES-----------------------------//

app.listen(4000, function() {
  console.log('Auto Tag is listening on part 4000!')
});
