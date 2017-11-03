import React, {Component} from 'react'
import {Map, InfoWindow, Marker} from 'google-maps-react';
import {connect} from 'react-redux'
import { onMapClick, onMapMarkerClick, fetchComments } from '../actions'
// import './App.css'

  export class GoogleMap extends Component {

      componentDidMount() {
        this.props.dispatch(fetchComments())
      }

      mapClicked(mapProps, map, clickEvent) {
        console.log(mapProps);
        console.log(map);
        const latitude = clickEvent.latLng.lat()
        const longitude = clickEvent.latLng.lng()

      }

      onMarkerClick(props, marker, e) {
        console.log(props);
      }

       render() {
         console.log(this.props);
        const style = {
        width: '100%',
        height: '100%',

      }

    return (

        <Map className="Cool"
          google={window.google}
          // onReady={this.fetchPlaces}
          center={{
            lat: this.props.lat,
            lng: this.props.lng
          }}
          style={style}
          initialCenter={{
            lat: this.props.lat,
            lng: this.props.lng
          }}
          zoom={16}
          onClick={this.mapClicked}
          >
      {
        this.props.comments.map((comment, index) =>(
           <Marker
             onClick={() => {
               this.props.dispatch(onMapMarkerClick(comment, this.props.history))
             }}
             key={index}
            title={'Bronx County Court'}
            name={'court'}
            position={{lat: comment.lat, lng: comment.lng}} />
        ))
      }


        <InfoWindow>
            <div>
              <h1>''</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
 return{
  lat: state.map.lat,
  lng: state.map.lng,
  comments: state.map.comments,
  history: ownProps.history
 }
}

export default connect(mapStateToProps)(GoogleMap)
