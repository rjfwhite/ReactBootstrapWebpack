var React = require('react')
var emitter = require('./globalEmitter')

module.exports = React.createClass({
    displayName: 'Deployment',
    click: function() {
        emitter.emitAction({
            type: "toggleDeployment",
            name: this.props.deployment.name
        })
    },
    render: function() {
        var innerData
        if(this.props.deployment.toggled) {
            innerData = <p>BANTER</p>
        }
        return <div>
            <h2>{this.props.deployment.name}</h2><a onClick={this.click}>CLICK</a>
            {innerData}
        </div>
    }
})