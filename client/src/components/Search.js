import React, { Component } from 'react';
import PlacesAutocomplete, { geocodeByAddress, geocodeByPlaceId, getLatLng } from 'react-places-autocomplete'
import {upDateMapLocation} from '../actions'
import './Map.css'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'


class Search extends Component {
    constructor(props) {
    super(props)
    this.state = { address: ''}
    this.onChange = (address) => this.setState({ address })
    
  }



      handleSelect(props, e) {
     
      geocodeByAddress(this.state.address, this.state.placeId)
      .then(results => getLatLng(results[0]))
      .then (latLng => props.dispatch(upDateMapLocation(latLng.lat, latLng.lng)))
      .catch(error => console.error('Error', error))
      this.setState({address: ''})
    }

   

    handleLogout() {
      localStorage.removeItem('apiToken');
      window.location='/signin'
    }


    

    render() {
      const props = this.props


      const myStyles = {
        
        input: {
          height: '100%',
          width: '100%',
          padding: '20px', 
        },

      }

        const style = {
        textAlign: 'center',
    }

      const styles2 = {
        color: 'black',
      }
       const styles1 = {
        color: 'black',
      }

       const savedStyle = {

          position: 'absolute',
          top: 10,
          right: 0,
          backgroundColor: '#99c5ff',
          borderRadius: 5,
          width: '98px',
          textAlign: 'center',
          padding: 5,
          margin: 5,
          color: 'white',
          fontSize: 18, 

      };
     

      const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
    }
        return (
          <div className="Search" style={style}>
          <h1 style={styles2}>Search Your Neighborhood</h1>
          <h2 style={styles2}> Find out what's really going on in different neighborhoods across the country and the world.
            <br/>Connect with like minded people and let's learn together</h2>
          <PlacesAutocomplete inputProps={inputProps} 
          styles={myStyles}
          onEnterKeyDown={(e) => this.handleSelect(props, e)} 
           onSelect={(e) => this.handleSelect(props, e)} 
          />
           <Link to='/comment'>
                   <button type='text'> Add Comment</button>
                   </Link>
           <button onClick={() => this.handleLogout()} style={savedStyle} >Log Out</button>

              </div>
           
     
    );
  }
}

// const mapDispatchToProps = {
//    upDateMapLocation
// }

export default connect()(Search)




