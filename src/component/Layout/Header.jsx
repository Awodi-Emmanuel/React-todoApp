import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Header extends Component {
    state = {  }
    render() { 
        return (
        <header style={headerStyle}>
            <h1>React-TodoApp</h1>
            <Link  style={headerStyle} to="/">Home</Link> |
            <Link style={headerStyley} to="/about">About</Link>|
        
          
        </header> );
    }
}
const headerStyle = {
background: '#5ED2F2',
color: '#ffffff',
textAlign: 'center',
padding: '5px',
textDecoration: 'none'
}
const headerStyley = {
color: '#ffffff',
textDecoration: 'none'

}
const linkStyle = {

    color: '#fff',
    textDecoration: 'none'
}


 

export default Header;