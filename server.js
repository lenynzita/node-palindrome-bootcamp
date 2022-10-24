// Worked with Ty, zain and Hassan

const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/otherpage') {
    fs.readFile('otherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/otherotherpage') {
    fs.readFile('otherotherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/api') {

    if('student' in params){
      isItAPalindrome = (params['student'].toLowerCase().split('').reverse().join('') )
        res.writeHead(200, {'Content-Type': 'application/json'});
        if(params['student'] === isItAPalindrome){
          checkForPalindrome = 'yes'
        } else {
          checkForPalindrome = 'no'
        }
        const objToJson = {
          personChoice: `${checkForPalindrome}`, //to display on the dom
        }
      //flpi word so I am able to compare
        //res.writeHead(200, {'Content-Type': 'application/json'});
        
        // if(params['student'] === isItAPalindrome){
        //   checkForPalindrome = 'yes'
        // } else {
        //   checkForPalindrome = 'no'
        // }
        // const objToJson = {
        //   personChoice: `${checkForPalindrome}`, //to display on the dom
        // }
        res.end(JSON.stringify(objToJson));
    //student = leon
  
      }//student != leon
    }//student if
  //else if
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else{
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000);
