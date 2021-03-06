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



      handleSelect(props, address) {

      geocodeByAddress(address)
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

        root: {
          position: 'relative',
          paddingBottom: '10px',
        },

        input: {
          height: '100%',
          width: '100%',
          padding:'20px',
        },

      }

        const style = {
        textAlign: 'center',

    }

      const styles2 = {
        color: 'black',
        // fontFamily: 'Open Sans',
        // fontStyle: 'italic'
      }
      

     

      const butWrapper = {
        display: 'flex',
        margin: '2px',
       // width: '40%',
        justifyContent: 'spaceAround',
      }


      const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
       placeholder: 'Search Away...'
    }

        return (
          <div className="Search" style={style}>
            <div style={butWrapper}>
              <Link to='/comment'>
                <button className="Map-button" type='text'> Add Comment</button>
             </Link>
             <button className="Dap-button" onClick={() => this.handleLogout()}>Log Out</button>
            </div>
            <h1 className="search-title" style={styles2}>Search Your Neighborhood</h1>
            <h2 style={styles2}> Find out what's really going on in different neighborhoods across the country and the world.
              <br/>Connect with like minded people and let's learn together</h2>
            <PlacesAutocomplete inputProps={inputProps}
            styles={myStyles}
            onEnterKeyDown={(e) => this.handleSelect(props, e)}
             onSelect={(e) => this.handleSelect(props, e)}
            />
          </div>


    );
  }
}

// const mapDispatchToProps = {
//    upDateMapLocation
// }

export default connect()(Search)
