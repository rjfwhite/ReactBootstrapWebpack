var globalEmitter = require('./globalEmitter')

var stores = {}

var storeBinders = {}

var updateBinds = function(name) {
	if(stores[name] != undefined) {
		if(storeBinders[name] != undefined) {
			storeBinders[name].forEach(function(binder) {
			binder(stores[name])
		})
		}
	}
}

module.exports.mount = function(name, store) {
	console.log("Mounted " + store + " at " + name)
	stores[name] = store
	updateBinds(name)
}

module.exports.bind = function(name, binder) {
	if(storeBinders[name] == undefined) {
		storeBinders[name] = [binder]
	}
	else {
		storeBinders[name].push(binder)
	}
	updateBinds(name)
}

module.exports.update = function(name) {
	updateBinds(name)
}
