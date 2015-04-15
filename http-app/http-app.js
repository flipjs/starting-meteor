if (Meteor.isClient) {
	Template.tweetList.helpers({
		tweets : function() {
			return Session.get('tweets')
		},
		latestRefresh : function() {
			return Session.get('latestRefresh')
		}
	})

	Meteor.setInterval(function() {
		Meteor.call('getTweets', 'javascript', function(err, tweets) {
			Session.set('tweets', tweets)
			var d = new Date()
			Session.set('latestRefresh', '' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds())
		})
	}, 3000)
}

if (Meteor.isServer) {
	Meteor.methods({
		getTweets: function(searchTerm) {
			var response = Meteor.http.call('GET', 'http://search.twitter.com/search.json', {
				params: { q: searchTerm }
			})
			return response.data.results.map(function(tweet) {
				return {
					user: tweet.from_user_name,
					text: tweet.text
				}
			})
		}
	})
}
