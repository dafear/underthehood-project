import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import {connect} from 'react-redux'
import {registerUser} from '../../actions/index'
import './register.css';


  class Register extends Component {
    constructor() {
      super();
      this.state = {
      email: '',
      password: '',
      logged: false,

    };
  }

  handleEmailChange = (evt) => {

    this.setState({ email: evt.target.value });

  }

  handlePasswordChange = (evt) => {

    this.setState({ password: evt.target.value });

  }


    

   
    render() {

      


      const style = {
        textAlign: 'center',
    };


      const savedStyle = {

          position: 'absolute',
          top: 10,
          right: 0,
          backgroundColor: '#99c5ff',
          borderRadius: 5,
          width: 75,
          textAlign: 'center',
          padding: 5,
          margin: 5,
          color: 'white',
          fontSize: 18, 

      };

      const style1 = {
        fontSize: 25,
        color: 'white',
      }


          return (



            <div className="list" style={style}>

              <form onSubmit={(event)=>{
                event.preventDefault()
                this.props.dispatch(registerUser(this.state.email, this.state.password))
                }}>

                <div>
                  <h1>Under The Hood</h1>
                  <h2 style={style1}> what's really going on in your neighborhood.
                  <br/> Register here and find out! </h2>
                  </div>

                <input

                  type="text"
                  required
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.handleEmailChange}
                  /><br/>

                  <input
                  type="password"
                  required
                  placeholder="Enter password"
                  value={this.state.password}
                  onChange={this.handlePasswordChange}
                  /><br/>

                <button>Sign up</button>

               <Link  style={savedStyle} to="/signin">Sign In</Link>

             </form>

          </div>


        )

    }

  };

      export default connect() (Register)

