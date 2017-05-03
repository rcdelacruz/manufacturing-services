'use strict';
var request = require('request');
var util = require('util');

module.exports = {
  getNiats: getNiats
};

var res;
var TOKEN = '81dc9bdb52d04dc20036dbd8313ed055';
var BASE_URL = 'https://novus.pilmico.com/apitest/resources/testNiats';
var USER_AGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36';

function getNiats(req, res) {
  var division;
  if (typeof req.swagger.params.division !== 'undefined') {
    var division = req.swagger.params.division.value;
  }

  console.log(division);
  request({
    method: 'GET',
    headers: {
      'User-Agent': USER_AGENT
    },
    url: (typeof division !== 'undefined') ?
      util.format('%s/%s/%s', BASE_URL, division, TOKEN) : util.format('%s/%s', BASE_URL, TOKEN),
  }, function (error, response, body) {
    //console.log('Status:', response.statusCode);
    //console.log('Headers:', JSON.stringify(response.headers));
    console.log('Response:', body);
    res.json(JSON.parse(body));
  });
}