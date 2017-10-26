import React, {Component} from 'react';
import {signinUser} from '../../actions/index'
import {connect} from 'react-redux'
import './cool.css';
import axios from 'axios';




class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      logged: false,
      showError: false,
      submitted: false,
    };
  }

     


  handleEmailChange = (evt) => {
      this.setState({ email: evt.target.value, error: false });
    }

  handlePasswordChange = (evt) => { 
      this.setState({ password: evt.target.value, error: false });
    }

  

    


    render() {


    

     
       const style = {
            textAlign: 'center',
           };


        const style2 = {
          color: '#FF8C00',
        }


           // console.log(this.state.error);
         let errorMessage = ""
        if (this.state.error) {
            errorMessage =  "Sorry incorrect password!" 
         
         } 



        // let loading = ""
        // if (this.state.submitted) {
        //   loading =  <div className='loading-indicator'> </div> 
        // }


        


  return (
     
       <div className="Signin" style={style}>

           <form onSubmit={(event)=>{
                event.preventDefault()
                this.props.dispatch(signinUser(this.state.email, this.state.password))
                }}>
                
                  <h1>Under The Hood</h1>
                  <h2>Get The Real!</h2>

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
                <button>Sign In</button>
                <p>{errorMessage}</p>
                
              </form>
              
               
              </div>
              
     
        
    )
  }
}
export default connect() (SignIn)