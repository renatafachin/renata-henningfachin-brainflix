import React, { Component } from 'react';
import { Link } from "react-router-dom";
import DataConvert from '../components/DataConvert.js';

class Comment extends Component {
    render() {
        const { videoId, id, name, comment, timestamp } = this.props;
        let deleteComment = `/videos/${videoId}/comments/${id}`
        return (
            <div key={id}>
                <div className="comments-list__item">
                    <div className="comments-list__left">
                        <img className="comments-list__user-picture" src='/images/gray-square.jpg' alt="" />
                    </div>
                    <div className="comments-list__right">
                        <div className="comments-list__right-top">
                            <span><h4 className="comments-list__name">{name}</h4></span>
                            <span><h4 className="comments-list__date"><DataConvert value={timestamp} /></h4></span>
                        </div>
                        <span><h4 className="comments-list__text">{comment}</h4></span>
                        <Link to={deleteComment}><button className="comments-list__delete">DELETE</button></Link>
                    </div>
                </div>
                <hr className="comments-list__divider"></hr>
            </div>
        );
    }
}

export default Comment;
