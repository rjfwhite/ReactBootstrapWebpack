module.exports = function (actions, stores, name) {

    actions.when("setEntity", function (action) {
        publicSelf.data = action.entity
        stores.update(name)
    })

    actions.when("boopClicked", function (action) {
        if(action.id == publicSelf.data.id) {
            publicSelf.data.id += 1
            stores.update(name)
        }
    })

    var publicSelf = {
        data: 32
    }

    stores.mount(name, publicSelf)
    return publicSelf
}