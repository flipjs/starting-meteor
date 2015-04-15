if (Meteor.isClient) {

	function add(item) {
		var list = Session.get('list')
		list.push(item)
		Session.set('list', list)
	}

	function remove(item) {
		var list = Session.get('list')
		var index = list.indexOf(item)
		if (~index) {
			list.splice(index, 1)
			Session.set('list', list)
		}
	}

	Session.set('list', ['one', 'two'])
	Template.list.items = function() {
		return Session.get('list')
	}

	Template.list.events({
		'keypress input': function(e, t) {
			if (e.keyCode === 13) {
				var input = t.find('input')
				add(input.value)
				input.value = ''
			}
		}
	})

	Template.item.events({
		'click': function(e, t) {
			var item = t.data
			remove(item)
		}
	})

	Template.item.rendered = function() {
		console.log('rendered: ', this.data)
	}
	Template.item.created = function() {
		console.log('created: ', this.data)
	}
	Template.item.destroyed = function() {
		console.log('destroyed: ', this.data)
	}
}
