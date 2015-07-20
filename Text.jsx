var React = require('react')

module.exports = React.createClass({
    displayName: 'Text',
    render: function(){
       return <p>{this.props.foo}</p>
    }
})