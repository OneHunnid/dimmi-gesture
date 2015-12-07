var Home = (function() {

	// Partials
	var tweetPartial = $('#active-tweet-partial').html();
		tweetPartialCompiled = _.template( tweetPartial );

	// DOM Handlers

	// KICKSTART VIEW
	function initHome() {

		// load main content
		$('#main-content').html( tweetPartialCompiled );

		// bind events

	}
	return {
		init: initHome
	};

})();
