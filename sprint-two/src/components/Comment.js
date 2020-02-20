import React, { Component } from 'react';

class Comment extends Component {
    render() {
        const { id, name, comment, timestamp } = this.props;
        return (
            <div key={id}>
                <div className="comments-list__item">
                    <div className="comments-list__left">
                        <img className="comments-list__user-picture" src='/images/gray-square.jpg' alt="" />
                    </div>
                    <div className="comments-list__right">
                        <div className="comments-list__right-top">
                            <span><h4 className="comments-list__name">{name}</h4></span>
                            <span><h4 className="comments-list__date">{timestamp}</h4></span>
                        </div>
                        <span><h4 className="comments-list__text">{comment}</h4></span>
                    </div>
                </div>
                <hr className="comments-list__divider"></hr>
            </div>
        );
    }
}

export default Comment;
