import React, {Component} from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchComments } from '../../actions'
import './Comments.css';

class Comments extends Component {

  render() {



    const style2 = {
        fontSize: '30px',
       // textAlign: 'left',
    }

     const style = {
        // listStylePosition: 'inside',
       listStyleType: 'none',
    }


    const savedStyle = {

          position: 'absolute',
          top: 10,
          right: 0,
          backgroundColor: '#99c5ff',
          borderRadius: 5,
          width: 98,
          textAlign: 'center',
          padding: 5,
          margin: 5,
          color: 'white',
          fontSize: 18, 

      };

      const style3 = {

          position: 'absolute',
          top: 10,
          left: 0,
           textAlign: 'center',
            padding: 5,
          margin: 5,

      }

    return (
      <div className="Comments">
        <h1 style={style3}>Comments</h1>
        <ul>
          {this.props.comments.map((comment, index) => (
            <li key={index}
            style={style2}>{comment.comment}</li>
          ))}
        </ul>
         <Link  style={savedStyle} to="/dashboard">Back to Searching</Link>

      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  comments: state.map.comments,

})
export default connect(mapStateToProps)(Comments)
