module.exports = function () {
    var assert = require("../assert").assert
    var subscribers = []
    var typeSubscribers = {}

    return {
        emitAction: function (action) {
            assert(action.type != undefined, "action should have a type")
            subscribers.forEach(function (subscriber) {
                subscriber(action)
            })
            if (typeSubscribers[action.type]) {
                typeSubscribers[action.type].forEach(function (subscriber) {
                    subscriber(action)
                })
            }
        },
        all: function (subscriber) {
            subscribers.push(subscriber)
        },
        when(type, subscriber) {
            if (typeSubscribers[type] === undefined) {
                typeSubscribers[type] = []
            }
            typeSubscribers[type].push(subscriber)
        }
    }
}