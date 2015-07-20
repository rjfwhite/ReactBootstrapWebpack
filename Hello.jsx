'use strict'
var React = require('react')
var Alert = require('react-bootstrap').Alert;
var Button = require('react-bootstrap').Button;
var Nav = require('react-bootstrap').Nav;
var Navbar = require('react-bootstrap').Navbar;
var NavItem = require('react-bootstrap').NavItem;
var DropdownButton = require('react-bootstrap').DropdownButton;
var MenuItem = require('react-bootstrap').MenuItem;
module.exports = React.createClass({
    displayName: 'HelloReact',
    render: function(){
        return <div>
        <b>Banterz</b>Hello React
        <Button>YEAH</Button>
        <Alert>YEAHHAH</Alert>
          <Navbar brand='React-Bootstrap' inverse>
    <Nav>
      <NavItem eventKey={1} href='#'>Link</NavItem>
      <NavItem eventKey={2} href='#'>Link</NavItem>
      <DropdownButton eventKey={3} title='Dropdown'>
        <MenuItem eventKey='1'>Action</MenuItem>
        <MenuItem eventKey='2'>Another action</MenuItem>
        <MenuItem eventKey='3'>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey='4'>Separated link</MenuItem>
      </DropdownButton>
    </Nav>
  </Navbar>
        </div>
    }
})