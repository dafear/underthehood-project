import React, {Component} from 'react';
import {connect} from 'react-redux'
import { fetchComments } from '../../actions'

class Comments extends Component {

  render() {
    return (
      <div>
        <ul>
          {this.props.comments.map(comment => (
            <li>{comment.comment}</li>
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
