const express = require('express');
const fs = require('fs');
const request = require('request');
const cheerio = require('cheerio');

const data = require('./research/utag-export')

const app = express();

app.get('/', (req, res) => {
  // const url = 'http://www.thegreatcourses.com/courses/all-types/on-sale-courses';
  // request(url, (error, response, html) => {
  //   if(!error) {
  //     console.log(data)
  //     const $ = cheerio.load(html);
  //     const currentSale = [];
  //     let globalVar = $('tgcJsNavProducts')
  //     res.json({test: true})
  //   }
  // })
  res.json({test: true})
});

app.get('/search/:term', (req, res) => {
  res.send(req.params.term)
})

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log('Server listening on port ' + port);
});
