module.exports = function(actions, stores, name) {

	actions.subscribe(function(action) {
		if(action.type == "setEntity") {
			publicSelf.data = action.entity
			stores.update(name)
		}
	})

	var publicSelf = {
		data: 32
	}

	stores.mount(name, publicSelf)
	return publicSelf
}