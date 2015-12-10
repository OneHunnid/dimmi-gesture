var Home = (function() {

	var i = 0;
	var twitterData = {
		tweet1 : [{
			user: {
				profile_image_url : "assets/avatar.png",
				name : "@Hodor"
			},
			text : "Hodor Hodor Hodor Hodor Hodor Hodor Hodor..... Hodor"
		}],
		tweet2 : [{
			user: {
				profile_image_url : "assets/avatar.png",
				name : "@johnsnow"
			},
			text : "Someone once said that I know nothing..."
		}],
		tweet3 : [{
			user: {
				profile_image_url : "assets/avatar.png",
				name : "@drwho"
			},
			text : "Fantastic!"
		}]
	};

	sqTweetData = getTweetData();

	// Partials
	var tweetPartial = $('#active-tweet-partial').html();
		tweetPartialCompiled = _.template( tweetPartial );

	// DOM Handlers
	function getTweetData() {
		return twitterData;
	}

	// count variable to increment timeout
	count = 1;
	for (var k in sqTweetData) {

	  // use self executing anonymous function to create a new scope
	  (function(k) {
	    for (var l = 0; l < sqTweetData[k].length; l++) {
	      var foo = sqTweetData[k][l]

	      // using setTimeout and incrementing the delay by count
	      setTimeout(function() {
	        console.log(foo);
	        i++;
	      }, 3000 * count);
	    }
	    count++;
	  })(k)
	}
	// KICKSTART VIEW
	function initHome() {

		// load main content
		$('#main-content').html(tweetPartialCompiled( sqTweetData ));

	}
	return {
		init: initHome
	};

})();
