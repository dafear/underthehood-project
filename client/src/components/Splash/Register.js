import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import {connect} from 'react-redux'
import {registerUser} from '../../actions/index'
import cooler from '../../images/cooler.png';
import search from '../../images/search.png';
import com7 from '../../images/com7.png';
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
    }



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




                   <div className="list">
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

                   <p style={{fontSize: 20, fontWeight: 'bold', position: 'relative', 'zIndex': 2}}>Already have an account? <Link to="/signin">
                      <a>Sign in here</a></Link></p>

                </form>

                 <div className="super">
                 <img className="wow" src={search} alt="search" />
                 <div className="oj">
                  <h3 className="para1">Search Any Neighborhood You Want!</h3>
                  <p> Search any neighborhood you want locally or internationally.</p>
                 </div>
                   
                   </div>

                         <div className="super">
                 <img className="wow" src={cooler} alt="cooler" />
                 <div className="oj">
                  <h3 className="para1">Save Your Comment About The Neighborhood!</h3>
                  <p>Say whatever you want about the area.</p>
                 </div>
                   
                   </div>


                         <div className="super">
                 <img className="wow" src={com7} alt="com7" />
                 <div className="oj">
                  <h3 className="para1">See Your Comment!</h3>
                  <p>Find your comment by clicking the map icon and see what others have to say.</p>
                 </div>
                   
                   </div>

             </div>
        )

    }

  };

      export default connect()(Register)
