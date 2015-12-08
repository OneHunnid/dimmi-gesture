var Home = (function() {

	var sqTweetData = {
		user: [{
			profile_image_url : "assets/avatar.png",
			name : "@johnsnow"
		}],
		text : "Someone once said that I know nothing..."
	};

	console.log("this is sqTweetData", sqTweetData);

	// Partials
	var tweetPartial = $('#active-tweet-partial').html();
		tweetPartialCompiled = _.template( tweetPartial );

	// DOM Handlers

	// KICKSTART VIEW
	function initHome() {

		// load main content
		$('#main-content').html(tweetPartialCompiled( sqTweetData ));

		// bind events

	}
	return {
		init: initHome
	};

})();