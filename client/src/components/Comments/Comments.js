import React, {Component} from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchComments } from '../../actions'
import './Comments.css';
import moment from 'moment'

class Comments extends Component {

  render() {



    const style2 = {
        fontSize: '30px',
       // textAlign: 'left',
    }

   

    const savedStyle = {

          position: 'absolute',
          top: 10,
          right: 0,
          backgroundColor: '#99c5ff',
          borderRadius: 5,
          width: 58,
          textAlign: 'center',
          padding: 2,
          margin: 1,
          color: 'white',
          fontSize: 18,

      };

      const style3 = {

          position: 'absolute',
          top: 10,
          left: 0,
           textAlign: 'center',
            padding: 5,
          margin: 2,

      }

    return (
      <div className="Comments">
        <h1 style={style3}>Comments</h1>
          {this.props.comments.map((comment, index) => (
            <div className="comment-section" key={index} style={style2}>
              <p className="comment-text">{comment.comment}</p>
              <span className="comment-date">by {comment.user} {moment(comment.created).startOf('day').fromNow()}</span>
            </div>
          ))}
         
         <Link className='NavTag' style={savedStyle} to="/dashboard">Search</Link>
          </div>
     
    )
  }
}


const mapStateToProps = (state) => ({
  comments: state.map.comments,

})
export default connect(mapStateToProps)(Comments)
