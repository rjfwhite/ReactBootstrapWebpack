
module.exports = function() {
	var assert = require("../assert").assert
	var subscribers = []

	return {
		emitAction: function(action) {
			assert(action.type != undefined, "action should have a type")
			subscribers.forEach(function(subscriber) {
				subscriber(action)
			})
		},
		subscribe: function(subscriber) {
			subscribers.push(subscriber)
		}
	}
}