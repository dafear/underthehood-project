import React, {Component} from 'react';
import {connect} from 'react-redux'
import { fetchComments } from '../../actions'
import './Comments.css';

class Comments extends Component {

  render() {

    

    const style2 = {
        fontSize: '30px',
       textAlign: 'center',
    }

     const style = {
        // listStylePosition: 'inside',
       listStyleType: 'none',
    }

    return (
      <div className="Comments">
        <h1>Comments</h1>
        <ul style={style}>
          {this.props.comments.map((comment, index) => (
            <li key={index}
            style={style2}>{comment.comment}</li>
          ))}
        </ul>
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  comments: state.map.comments,

})
export default connect(mapStateToProps)(Comments)
