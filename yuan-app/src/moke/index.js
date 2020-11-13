const Mock = require('mockjs');
Mock.mock('/test/get','get',require('./json/testGet.json'))
Mock.mock('/test/post','post',require('./json/testPost.json'))