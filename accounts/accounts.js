if (Meteor.isClient) {

	Template.login.creatingAccount = function() {
		return Session.get('creatingAccount')
	}

	Template.login.events({
		'click #loginForm': function() {
			Session.set('creatingAccount', false)
		},
		'click #newAccountForm': function() {
			Session.set('creatingAccount', true)
		},
		'click #createAccount': function(e, t) {
			Session.set('creatingAccount', false)
			Accounts.createUser({
				username: t.find('#username').value,
				password: t.find('#password').value,
				email: t.find('#email').value,
				profile: {
					name: t.find('#fullname').value
				}
			})
		}
	})
}
