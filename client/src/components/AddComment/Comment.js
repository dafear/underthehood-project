import React, { Component } from 'react';
import PlacesAutocomplete, { geocodeByAddress, geocodeByPlaceId, getLatLng } from 'react-places-autocomplete'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import { saveComment } from '../../actions'
// import './Comment.css';


class AddComment extends Component {
    constructor(props) {
      super(props)
      this.state = { address: '', lat: '', lng: ''}
      this.onChange = (address) => this.setState({ address })
    }

    handleSelect(props, e) {
      geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then (latLng => this.setState({lat: latLng.lat, lng: latLng.lng}))
      .catch(error => console.error('Error', error))
      this.setState({address: ''})
    }

    render() {
      const props = this.props

      const myStyles = {

        input: {
        fontSize: '25px',
        height: '50%',
        width: '50%',
        padding: '20px',
     

        },

      }

       const style = {
        textAlign: 'center',
       }

     const style2 = {
        fontSize: '30px',
        height: '50%',
        width: '50%',
        padding: '30px',


    }
     const styles3 = {
        fontSize: '30px'
      }

       const style4 = {

         backgroundColor: '#3498db',
        color: '#fff',
        padding: '15px',
        width: '200px',
        border: 'none',
        fontSize: '15px',
        textTransform: 'uppercase',
        marginTop: '15px',
        borderRadius: '7px',
      }


      const savedStyle = {

          position: 'absolute',
          top: 10,
          right: 0,
          backgroundColor: '#99c5ff',
          borderRadius: 5,
          width: 200,
          textAlign: 'center',
          padding: 5,
          margin: 5,
          color: 'white',
          fontSize: 18,
          zIndex: 2,

      };




      const inputProps = {
        value: this.state.address,
        onChange: this.onChange,
        placeholder: 'Enter Location...'
      }


        return (
          <div className="Comment" style={style}>

           <video className="fullscreen-bg__video" playsInline autoPlay muted loop>
              <source src="movie.mp4" type="video/mp4"/>
                  </video>

            

            <form className="register-form" onSubmit={(e) => {
              e.preventDefault()

              const comment = e.target.comment.value

              this.props.dispatch(saveComment(this.state.lat, this.state.lng, comment))

            }}>

            <h1>Enter Your Location</h1>

            <PlacesAutocomplete inputProps={inputProps}
              styles={myStyles}
              onEnterKeyDown={(e) => this.handleSelect(props, e)}
              onSelect={(e) => this.handleSelect(props, e)}
            />

            <h2  style={styles3}>Add Your Comment </h2>

              <textarea 

              style={style2} type="text" required placeholder="Enter Comment" name="comment">


              </textarea>

                  <br/><button style={style4}  type="submit">Submit</button>

            </form>

             <Link  style={savedStyle} to="/dashboard">Back to Searching</Link>

          </div>
    );
  }
}

export default connect()(AddComment)
