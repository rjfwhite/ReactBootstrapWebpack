var React = require('react')
var emitter = require('./globalEmitter')

module.exports = React.createClass({
    displayName: 'Entity',
    callback: function() {
        emitter.emitAction({
            type: "boopClicked",
            id: this.props.entity.id
        })
    },
    render: function(){
       return <p>{this.props.entity.id}::::{this.props.entity.prefab}
        <button onClick={this.callback}>Boop</button>
       </p>
    }
})