import React from 'react';

function CommentsList(props) {
    console.log(props.allComments);
    const allComments = (props.allComments);
    const commList = allComments.map(allComments => {
        return (
            <div key={allComments.id}>
                <div className="comments-list__item">
                    <div className="comments-list__left">
                        <img className="comments-list__user-picture" src='/images/gray-square.jpg' alt="" />
                    </div>
                    <div className="comments-list__right">
                        <div className="comments-list__right-top">
                            <span><h4 className="comments-list__name">{allComments.name}</h4></span>
                            <span><h4 className="comments-list__date">{allComments.timestamp}</h4></span>
                        </div>
                        <span><h4 className="comments-list__text">{allComments.comment}</h4></span>
                    </div>
                </div>
                <hr className="comments-list__divider"></hr>
            </div>
        );

    })
    return (
        <div className="comments-list">
            {commList}
        </div>
    );
}

export default CommentsList;