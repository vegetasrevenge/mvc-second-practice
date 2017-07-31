const express = require('express');
const mustacheEx = require('mustache-express');

const app = express();
const router = require('./routes/routes')
const mustacheExInstance = mustacheEx();
mustacheExInstance.cache = null;
app.engine('mustache', mustacheExInstance);

app.set('view engine', 'mustache');
app.set('view', __dirname + '/views');

app.use(express.static('public'));

app.use('/', router);

app.listen('4000', function(){
  console.log('listening on MST4000')
});
