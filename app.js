// Require our dependencies
var jquery = require('jquery');
var less = require('less');
var twitter = require('twitter');
var env = require('./env');
var keywords = require('./keywords');

// Create an express instance
var express = require('express');
var app = express();
var path = require('path');

// Authenticate Twitter
var client = new twitter({
    consumer_key: env.TWITTER_CONSUMER_KEY,
    consumer_secret: env.TWITTER_CONSUMER_SECRET,
    access_token_key: env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: env.TWITTER_ACCESS_TOKEN_SECRET
});

app.use('/scripts', express.static(__dirname + '/scripts'));
app.use('/styles', express.static(__dirname + '/styles'));
app.use('/assets', express.static(__dirname + '/assets'));

// Load index.html
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

// Load twitter module
app.use('/getTwitterInfo', function(req, res) {
    client.get('search/tweets', {'q': '%23squarespace%20OR%20%40squarespace%20-RT', 'result_type':'recent', 'count': '100' }, function(error, tweets, response){
      if (!error) {
        console.log(tweets);
        // filters
        tweets.statuses = tweets.statuses.filter(function(tweet){
            for(var i = 0; i < keywords.length; i++) {
                if (tweet.text.indexOf( keywords[i]) > -1) {
                    return false
                }
            }
            return true
        });
            // Then return it in json format:
            res.json({
                success: true,
                tweets: tweets

            });
      }
      else {console.log(error);
          // Then return it in json format:
            res.json({
                success: false,
                error: error
            });}
    }); 
});

// Start our server
var server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('twitterAggregator listening at http://%s:%s', host, port);
});
