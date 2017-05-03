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
    division = req.swagger.params.division.value;
  }

  console.log(division);
  request({
    method: 'GET',
    uri: 'https://rcdelacruz-test.apigee.net/manufacturing-proxy/testNiats/81dc9bdb52d04dc20036dbd8313ed055',
    headers: {
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
      'Accept-Encoding': 'gzip, deflate, sdch, br',
      'Accept-Language': 'en-US,en;q=0.8',
      'Cache-Control': 'max-age=0',
      'Connection': 'keep-alive',
      'Host': 'rcdelacruz-test.apigee.net',
      'Upgrade-Insecure-Requests': '1',
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36'
    }
  }, function (error, response, body) {
    //console.log('Status:', response.statusCode);
    //console.log('Headers:', JSON.stringify(response.headers));
    console.log('Response:', body);
    res.json(JSON.parse(body));
  });
}
