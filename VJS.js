var taskApp = new Vue({
	el: '#taskApp',
	data: {
		tasks: [
			{name: "This Task First", done: false},
			{name: "Buy some food", done: false},
			{name: "Throw out the trash", done: false},
		]
	},
	methods: {
		addTask: function(e) {
			e.preventDefault();
			this.tasks.push({
				name: this.tasks.name,
				done: false
			});
			this.tasks.name = '';
		},
		deleteTask: function(task) {
			this.tasks.splice(this.tasks.indexOf(task), 1)
		}
	}
})