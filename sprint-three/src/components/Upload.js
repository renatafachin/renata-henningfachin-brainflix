import React from 'react';
import thumbnail from '../assets/Images/Upload-video-preview.jpg';

export default function Upload() {
    return (
        <>
            <hr className="upload__hr--mobile" />
            <div className="upload">

                <h1 className="upload__heading">Upload Video</h1>
                <hr className="upload__hr--tablet-desk" />
                <div className="upload__details">
                    <div className="upload__thumb-section">
                        <h5 className="upload__thumb-heading">VIDEO THUMBNAIL</h5>
                        <img className="upload__thumbnail" src={thumbnail} alt="" />
                    </div>
                    <div className="upload__form-section">
                        <h5 className="upload__thumb-heading">TITLE YOUR VIDEO</h5>
                        <input className="upload__input-title" type="text" name="videoTitle" placeholder="Add a title to your video" />
                        <h5 className="upload__thumb-heading">ADD A VIDEO DESCRIPTION</h5>
                        <textarea className="upload__input-description" rows="5" placeholder="Add a description of your video" />
                    </div>
                </div>
                <hr className="upload__hr--tablet-desk" />
                <div className="upload__buttons">
                    <button className="upload__btn-cancel">CANCEL</button>
                    <button className="upload__btn-publish">PUBLISH</button>
                </div>
            </div>
        </>
    );
}
