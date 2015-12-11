var Home = (function() {

	// DOM Handlers

	// AJAX call to retrieve data from backend
	function getData() {
	    $.ajax({
	        url: "/getTwitterInfo",
	        success: function(data) {
			  	console.log(data);
			  	for (var i = 0; i < data.tweets.statuses.length; i++) {
			  		var tweet = data.tweets.statuses[i];
					setTimeout(startTimeout.bind(this,tweet.text, tweet.user.screen_name, tweet.user.profile_image_url), 3000 * i);
			  	}
			},
	        dataType: "json"
        });
    }

	// Starts the timeout function 
	function startTimeout(text, screen_name, avatar ) {
	    setHTML(text, screen_name, avatar);
	    fadeInData();
      }

    // Sets the tweet data to html elements
	function setHTML(text, screen_name, avatar) {
		document.querySelector(".activeTweet__message").innerHTML = text;
		document.querySelector(".activeTweet__name").innerHTML = screen_name;
		document.querySelector('.activeTweet__avatar img').src = avatar;
	}

	// Fades in Twitter data 
	function fadeInData() {
		$('.activeTweet').hide().fadeIn(900);
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
