/** @jsx React.DOM */
'use strict'
var React = require('react')
var Entity = require('./Entity')

var EntitiesStore = require('./stores/EntitiesStore')

var emitter = require('./globalEmitter')
var stores = require('./globalStores')

var entitiesStore = new EntitiesStore(emitter, stores, "entities")

stores.bind("entities", function(data) {
	React.render(<Entity entity={data} />, document.getElementById('content'))
})

setTimeout(function() {
	emitter.emitAction({
		type: "setEntity",
		entity: {
			id: 32,
			prefab: "Tree",
			position: [10,20,30]
		}
	})
}, 1000)