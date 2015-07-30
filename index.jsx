/** @jsx React.DOM */
'use strict'
var React = require('react')
var Entity = require('./Entity')
var Deployments = require('./Deployments')

var EntitiesStore = require('./stores/EntitiesStore')
var DeploymentStore = require('./stores/DeploymentStore')

var emitter = require('./globalEmitter')
var stores = require('./globalStores')

var entitiesStore = new EntitiesStore(emitter, stores, "entities")
var deploymentStore = new DeploymentStore(emitter, stores, "deployments")

//React.render(<Hello/>, document.getElementById('content'))

//stores.bind("entities", function (data) {
//    React.render(<Entity entity={data}/>, document.getElementById('content'))
//})

stores.bind("deployments", function(deployments) {
    console.log("DPLS")
    console.log(deployments)
    React.render(<Deployments deployments={deployments}/>, document.getElementById('content'))
})

setTimeout(function () {
    emitter.emitAction({
        type: "setEntity",
        entity: {
            id: 32,
            prefab: "Tree",
            position: [10, 20, 30]
        }
    })
}, 1000)