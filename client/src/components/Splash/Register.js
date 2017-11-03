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

       const style4 = {

         backgroundColor: '#99c5ff',
          borderRadius: 5,
          width: '98px',
          textAlign: 'center',
          padding: 5,
          margin: 5,
          color: 'white',
          fontSize: 18,
      }




      const style = {
        textAlign: 'center',
    };


      const savedStyle = {

          position: 'absolute',
          top: 10,
          right: 10,
      };


      const title = {
        fontFamily: 'Open Sans',
        fontStyle: 'italic'
      }

      const subtitle = {
        fontFamily: 'Open Sans',
        fontWeight: 'bold'
      }



          return (
               <div className="list" style={style}>
                   <video className="fullscreen-bg__video" playsInline autoPlay muted loop>
                      <source src="movie.mp4" type="video/mp4"/>
                    </video>

                 <form className="register-form" onSubmit={(event)=>{
                   event.preventDefault()
                   this.props.dispatch(registerUser(this.state.email, this.state.password))
                   }}>




                   <div>
                     <h1 style={title}>Under The Hood</h1>
                     <h2 style={subtitle}> what's really going on in your neighborhood.
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

                   <button className="app-button">Sign up</button>

                </form>

                  <p style={{fontSize: 20, fontWeight: 'bold', position: 'relative', 'zIndex': 2}}>Already have an account?              <Link to="/signin">
   <a>Sign in here</a></Link></p>

             </div>
        )

    }

  };

      export default connect() (Register)
