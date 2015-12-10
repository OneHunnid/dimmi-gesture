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

	for (var k in sqTweetData) {
	(function(k){
	    // Gives me object {tweet1: Array[1], tweet2: Array[1]. tweet3: Array[1]}
	    console.log("sqTweetData = ",sqTweetData);

	    for (var l = 0; l < sqTweetData[k].length; l++) {
	        var foo = sqTweetData[k][l]
	        // Loops sqTweetData and returns object {user: object, text: "hodor hodor hodor etc"}
	        console.log("foo = ", foo);

	        setInterval(function() {

	            i++;
	        }, 3000);
	    }
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
