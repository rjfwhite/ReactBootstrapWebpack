module.exports = function (actions, stores, name) {

    actions.when("setEntity", function (action) {
        publicSelf = action.entity
        stores.mount(name, publicSelf)
    })

    actions.when("boopClicked", function (action) {
        if(action.id == publicSelf.id) {
            publicSelf.id += 1
            stores.mount(name, publicSelf)
        }
    })

    var publicSelf = {
    }
    stores.mount(name, publicSelf)
}