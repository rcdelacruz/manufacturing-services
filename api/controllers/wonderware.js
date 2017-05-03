'use strict';
var request = require('request');
var util = require('util');

module.exports = {
  getNiats: getNiats,
  getVolumes: getVolumes,
  getGpIocfs: getGpIocfs,
  getTargetSafetyStocks: getTargetSafetyStocks
};

var res;
var TOKEN = '81dc9bdb52d04dc20036dbd8313ed055';
var BASE_URL = 'https://rcdelacruz-test.apigee.net/manufacturing-proxy';
var USER_AGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36';

function getNiats(req, res) {
  var division;
  if (typeof req.swagger.params.division !== 'undefined') {
    division = req.swagger.params.division.value;
  }

  console.log(division);
  request({
    method: 'GET',
    uri: (typeof division === 'undefined') ?
      util.format('%s/testNiats/%s', BASE_URL, TOKEN) : util.format('%s/testNiats/%s/%s', BASE_URL, division, TOKEN),
    headers: {
      'User-Agent': USER_AGENT
    }
  }, function (error, response, body) {
    console.log('Status:', response.statusCode);
    console.log('Headers:', JSON.stringify(response.headers));
    console.log('Response:', body);
    res.json(JSON.parse(body));
  });
}

function getVolumes(req, res) {
  var division;
  if (typeof req.swagger.params.division !== 'undefined') {
    division = req.swagger.params.division.value;
  }

  console.log(division);
  request({
    method: 'GET',
    uri: (typeof division === 'undefined') ?
      util.format('%s/testVolumes/%s', BASE_URL, TOKEN) : util.format('%s/testVolumes/%s/%s', BASE_URL, division, TOKEN),
    headers: {
      'User-Agent': USER_AGENT
    }
  }, function (error, response, body) {
    console.log('Status:', response.statusCode);
    console.log('Headers:', JSON.stringify(response.headers));
    console.log('Response:', body);
    res.json(JSON.parse(body));
  });
}

function getGpIocfs(req, res) {
  var division;
  if (typeof req.swagger.params.division !== 'undefined') {
    division = req.swagger.params.division.value;
  }

  console.log(division);
  request({
    method: 'GET',
    uri: (typeof division === 'undefined') ?
      util.format('%s/testGpIocfs/%s', BASE_URL, TOKEN) : util.format('%s/testGpIocfs/%s/%s', BASE_URL, division, TOKEN),
    headers: {
      'User-Agent': USER_AGENT
    }
  }, function (error, response, body) {
    console.log('Status:', response.statusCode);
    console.log('Headers:', JSON.stringify(response.headers));
    console.log('Response:', body);
    res.json(JSON.parse(body));
  });
}

function getTargetSafetyStocks(req, res) {
  var division;
  if (typeof req.swagger.params.division !== 'undefined') {
    division = req.swagger.params.division.value;
  }

  console.log(division);
  request({
    method: 'GET',
    uri: (typeof division === 'undefined') ?
      util.format('%s/testTargetSafetyStocks/%s', BASE_URL, TOKEN) : util.format('%s/testTargetSafetyStocks/%s/%s', BASE_URL, division, TOKEN),
    headers: {
      'User-Agent': USER_AGENT
    }
  }, function (error, response, body) {
    console.log('Status:', response.statusCode);
    console.log('Headers:', JSON.stringify(response.headers));
    console.log('Response:', body);
    res.json(JSON.parse(body));
  });
}