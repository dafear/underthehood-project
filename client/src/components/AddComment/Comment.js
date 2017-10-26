import React, { Component } from 'react';
import PlacesAutocomplete, { geocodeByAddress, geocodeByPlaceId, getLatLng } from 'react-places-autocomplete'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import { saveComment } from '../../actions'


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
          height: '100%',
          width: '100%',
          padding: '20px',
        },
      }


      const inputProps = {
        value: this.state.address,
        onChange: this.onChange,
      }
        return (
          <div>
            <PlacesAutocomplete inputProps={inputProps}
            styles={myStyles}
            onEnterKeyDown={(e) => this.handleSelect(props, e)}
             onSelect={(e) => this.handleSelect(props, e)}
            />
            <form onSubmit={(e) => {
              e.preventDefault()

              const comment = e.target.comment.value

              this.props.dispatch(saveComment(this.state.lat, this.state.lng, comment))

            }}>
              <textarea  name="comment" rows="4" cols="50">


              </textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
    );
  }
}

export default connect()(AddComment)
