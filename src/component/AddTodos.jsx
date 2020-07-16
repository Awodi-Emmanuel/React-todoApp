import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import 'font-awesome/css/font-awesome.min.css';

class AddTodos extends Component {
    state = { 
        title: ''

     } 
     onSubmit = (e) => {
         e.preventDefault();
         this.props.addTodo(this.state.title);
         this.setState({ title: ''});
     }
     onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    render() { 
        return ( 
         <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
           <input 
           type="text"
           name="title"
           style={{ flex: '10', padding: '5px'}}
           placeholder="Add Todo ..."
           value={this.state.title}
           onChange={this.onChange}
            />
            <button type="submit" className="btn btn-success">
            <i className="fa fa-plus" aria-hidden="true"></i>

    </button>
            

            

         </form>

         );
    }
}


export default AddTodos;