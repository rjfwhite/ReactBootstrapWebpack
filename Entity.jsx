var React = require('react')

module.exports = React.createClass({
    displayName: 'Entity',
    render: function(){
       return <p>{this.props.entity.id}::::{this.props.entity.prefab}</p>
    }
})