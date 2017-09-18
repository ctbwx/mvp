const express = require('express');
const browserify = require('browserify-middleware');
const path = require('path');

let app = express();

app.get('/bundle.js', browserify('./client/index.js', {
  transform : [ [ require('babelify'), {presets: ['es2015', 'react'] } ] ]
}));

app.use(express.static(path.join(__dirname, '../client')));

app.use('/style.css', function(req, res) {
  res.sendFile(path.join(__dirname, 'style.css'));
});

app.listen(4000, function() {
  console.log('Auto Tag is listening on part 4000!')
});
