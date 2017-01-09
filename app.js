const express = require('express');
const fs = require('fs');
// const phantomjs = require('phantomjs-prebuilt');

// TODO: Replace utag-export with calls to DB
const data = require('./research/utag-export')

const app = express();

const allowCrossDomain = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://www.thegreatcourses.com');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

app.use(allowCrossDomain);

app.get('/', (req, res) => {
  // TODO: Setup a timed scraper to grab the tgcJsNavProducts global variable
  //       on an hourly basis and update a database with current sale items
  //       via PhantomJS
  res.json({test: true})
});

app.get('/search/:term', (req, res) => {
  let test;
  for (let key in data.tgcJsNavProducts) {
    const obj = data.tgcJsNavProducts[key];
    if (obj.name === req.params.term) {
      const top = +obj.price_html.split('$')[1].split('<')[0] + obj.price
      return res.json({
        name: req.params.term,
        price: obj.price,
        top
      })
    }
  }
  res.json({price: false})
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
