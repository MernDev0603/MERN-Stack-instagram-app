import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteComment } from '../../actions/postActions';

class CommentItem extends Component {
 
  render() {
    const {comment, auth, postId} = this.props;   
    return (
      <div className="container-fluid">
        <div class="row">        
          <div className='col-lg-0' >
            <div id='col-space'
            style ={{marginLeft: "15px"}}>
          
            <Link to={`/home/${comment.handle}/${comment.user}`} className='handlename-post'>
              {comment.name}
            </Link>
            <span className='textStyle-comment'>
              &nbsp; {comment.text}
            </span>
            </div>
        </div>
       
      </div>
      </div>
      
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, {deleteComment})(CommentItem);

