import React from 'react';
import userPicture from '../assets/Images/Mohan-muruge.jpg';


export default function AddComment() {
    return (
        <div className="comments">
            <form className="comments__form">
                <div className="comments__form__left">
                    <img className="comments__form__user-picture" src={userPicture} alt="" />
                </div>
                <div className="comments__form__right">
                    <h5 className="comments__form__heading">JOIN THE CONVERSATION</h5>
                    <div className="comments__form__input-btn">
                        <textarea className="comments__form__input" name="comment" rows="4" placeholder="Add a new comment"></textarea>
                    </div>
                </div>
            </form>
            <hr className="comments__divider"></hr>
        </div>
    );
}