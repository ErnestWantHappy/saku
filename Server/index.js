// node 后端服务器
//index.js——Express 服务器入口文件

var express = require('express')
var app = express();
const cors = require('cors');

// app.use(cors());
app.use(express.static(__dirname+'/build'));
app.get("/api/data1",function (request,response) {
  var data = require('./data1.json');//要获取的json文件
  response.send(data);
})
app.listen('8002',function () {
  console.log('>listening on 8002')
});

app.get("/api/data2",function (request,response) {
  var data = require('./data2.json');//要获取的json文件
  response.send(data);
})

app.get("/api/data3",function (request,response) {
  var data = require('./data3.json');//要获取的json文件
  response.send(data);
})