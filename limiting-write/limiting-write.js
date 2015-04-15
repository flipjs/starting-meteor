var Items = new Meteor.Collection('items')

Items.allow({

	insert: function(userId, doc) {
		return userId && doc.owner === userId
	},

	update: function() {
	},

	remove: function() {
	}
})
