var Home = (function() {

	var allTweets = [];
	var currentlyViewingIndex = -1;

	// DOM Handlers

	// AJAX call to retrieve data from backend
	function getData() {
	    $.ajax({
	        url: "/getTwitterInfo",
	        success: function(data) {
			  	console.log("data = ",data);
			  	allTweets = data.tweets.statuses;

				// stagger the timeouts
			  	for (var i = 0; i < data.tweets.statuses.length; i++) {
					setTimeout(startTimeout.bind(this, i, data.tweets.statuses.length), 30000 * i);
			  	}
			},
	        dataType: "json"
        });
    }

	// Starts the timeout function 
	function startTimeout(i, totalTweets ) {
		if ( i === totalTweets - 1 ) {
			setTimeout(getData, 30000);
		}
		currentlyViewingIndex = i;

		// Formatting Date
		var tweetDate = moment(allTweets[currentlyViewingIndex].created_at).format( 'MMMM Do YYYY', 'en');

	    setHTML(allTweets[currentlyViewingIndex].text, allTweets[currentlyViewingIndex].user.screen_name, allTweets[currentlyViewingIndex].user.profile_image_url, tweetDate );
	    fadeInData();
      }

    // Sets the tweet data to html elements
	function setHTML(text, screen_name, avatar, date) {
		document.querySelector(".activeTweet__message").innerHTML = text;
		document.querySelector(".activeTweet__name").innerHTML = "@" + screen_name;
		document.querySelector('.activeTweet__avatar img').src = avatar;
		document.querySelector(".activeTweet__date").innerHTML = date;
	}

	// Fades in Twitter data 
	function fadeInData() {
		$('.activeTweet').hide().fadeIn(900);
	}

	function motionDetection() {
		gest.start();
		// Testing gesture control with gest.js
		gest.options.subscribeWithCallback(function(gesture) {
		    if (gesture.left) {
				currentlyViewingIndex = currentlyViewingIndex -1;
				startTimeout(currentlyViewingIndex, allTweets.length);
		    }
		    else if (gesture.right) {
		    	currentlyViewingIndex = currentlyViewingIndex +1;
		    	startTimeout(currentlyViewingIndex, allTweets.length);
		    }
		});
	}

	// Starts getData() which retrieves and displays Twitter data 
	getData();
	motionDetection();
	// gest.options.debug(true);

	// KICKSTART VIEW
	function initHome() {

		// // load main content
		$('#main-content').html();

	}
	return {
		init: initHome
	};

})();
