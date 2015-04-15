if (Meteor.isClient) {

	Template.staff.people = [
		{ fullname: 'Philip', job: 'CEO' },
		{ fullname: 'Randy', job: 'CTO' },
		{ fullname: 'Ronneil', job: 'Developer' }
	]

	Template.person.executive = function() {
		return !!this.job.match(/^C.*O$/)
	}

}
