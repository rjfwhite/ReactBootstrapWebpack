var React = require('react')
var Deployment = require('./Deployment')

module.exports = React.createClass({
    displayName: 'Deployments',
    render: function(){
        return <ul>
            {
                this.props.deployments.map(function(deployment){
                    return <li><Deployment deployment={deployment}/></li>
                })
            }
        </ul>
    }
})