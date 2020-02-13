import React from 'react';
import userPictureGray from '../assets/Images/gray-square.jpg';

function CommentsList(props) {
    console.log(props.allComments);
    const allComments = (props.allComments);
    const commList = allComments.map(allComments => {
        return (
            <>
                <div className="comments-list__item">
                    <div className="comments-list__left">
                        <img className="comments-list__user-picture" src={userPictureGray} alt="" />
                    </div>
                    <div className="comments-list__right">
                        <div className="comments-list__right-top">
                            <span><h4 className="comments-list__name">{allComments.name}</h4></span>
                            <span><h4 className="comments-list__date">{allComments.timestamp}</h4></span>
                        </div>
                        <span><h4>{allComments.comment}</h4></span>
                    </div>
                </div>
                <hr className="comments-list__divider"></hr>
            </>
        );

    })
    return (
        <div className="comments-list">
            {commList}
        </div>
    );
}

export default CommentsList;