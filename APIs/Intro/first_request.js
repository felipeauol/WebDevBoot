request = require("request");

request("http://google.com", function(err, resp, body){
    if(!err && resp.statusCode == "200"){
        console.log('body: ', body);
    }
})