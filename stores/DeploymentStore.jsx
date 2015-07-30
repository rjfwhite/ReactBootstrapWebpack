module.exports = function (actions, stores, name) {

    //actions.when("setEntity", function (action) {
    //    publicSelf.data = action.entity
    //    stores.update(name)
    //})
    //

    deployments = {}

    actions.when("toggleDeployment", function (action) {
        deployments[action.name].toggled = !deployments[action.name].toggled
        setDeployments(deployments)
    })

    var setDeployments = function(newDeployments) {
        deployments = newDeployments
        var deploymentList = new Array;
        for(var o in deployments) {
            deploymentList.push(deployments[o]);
        }
        stores.mount(name, deploymentList)
    }

    $.ajax({
        method: "GET",
        url: "",
        accept: { json: 'application/json' },
        headers: {
            "Authorization" : "Bearer"
        },
        success: function(remoteData) {
            var deployments = {}
            remoteData["_embedded"]["deployment"].forEach(function(deployment) {
                deployment.toggled = false
                deployments[deployment.name] = deployment
            })
            setDeployments(deployments)
        }
    })
}