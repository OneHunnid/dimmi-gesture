var Home = (function() {
	var foo
	var twitterData = [
		{
			user: {
				profile_image_url : "assets/avatar.png",
				name : "@Hodor"
			},
			text : "Hodor Hodor Hodor Hodor Hodor Hodor Hodor..... Hodor"
		},
		{
			user: {
				profile_image_url : "assets/avatar.png",
				name : "@johnsnow"
			},
			text : "Someone once said that I know nothing..."
		},
		{
			user: {
				profile_image_url : "assets/avatar.png",
				name : "@drwho"
			},
			text : "I love Squarespace Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sapien lacus, dignissim sagittis metus ac, imperdiet maximus"
		}
	]


	// DOM Handlers
	function startTimeout(i) {
        foo = twitterData[i];
	    setHTML();
	    fadeInData();
      }

	function setHTML() {
		document.querySelector(".activeTweet__message").innerHTML = foo.text;
		document.querySelector(".activeTweet__name").innerHTML = foo.user.name;
		document.querySelector('.activeTweet__avatar img').src = foo.user.profile_image_url;
	}

	function fadeInData() {
		$('.activeTweet').hide().fadeIn(900);
	}

	for (var i = 0; i < twitterData.length; i++) {
		if (i === 0) {
			foo = twitterData[i];
			setHTML();
			fadeInData();
		}
		else {
	      // using setTimeout and incrementing the delay by count
	      setTimeout(startTimeout.bind(this,i), 3000 * i);
		}
	}


	// KICKSTART VIEW
	function initHome() {

		// // load main content
		$('#main-content').html();

	}
	return {
		init: initHome
	};

})();
