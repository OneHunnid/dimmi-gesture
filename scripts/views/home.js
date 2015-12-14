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
					setTimeout(startTimeout.bind(this, i, data.tweets.statuses.length), 3000 * i);
			  	}
			},
	        dataType: "json"
        });
    }

	// Starts the timeout function 
	function startTimeout(i, totalTweets ) {
		if ( i === totalTweets - 1 ) {
			setTimeout(getData, 3000);
		}
		currentlyViewingIndex = i;
		console.log("currentlyViewingIndex = ", i);
	    setHTML(allTweets[currentlyViewingIndex].text, allTweets[currentlyViewingIndex].user.screen_name, allTweets[currentlyViewingIndex].user.profile_image_url, allTweets[currentlyViewingIndex].created_at );
	    fadeInData();
      }

    // Sets the tweet data to html elements
	function setHTML(text, screen_name, avatar, date) {
		document.querySelector(".activeTweet__message").innerHTML = text;
		document.querySelector(".activeTweet__name").innerHTML = screen_name;
		document.querySelector('.activeTweet__avatar img').src = avatar;
		document.querySelector(".activeTweet__date").innerHTML = date;
	}

	// Fades in Twitter data 
	function fadeInData() {
		$('.activeTweet').hide().fadeIn(900);
	}

	function motionDetection() {
		currentlyViewingIndex = currentlyViewingIndex -1;
		currentlyViewingIndex = currentlyViewingIndex +1;
		startTimeout(currentlyViewingIndex, allTweets.length);
	}

	// Starts getData() which retrieves and displays Twitter data 
	getData();

	// KICKSTART VIEW
	function initHome() {

		// // load main content
		$('#main-content').html();

	}
	return {
		init: initHome
	};

})();
