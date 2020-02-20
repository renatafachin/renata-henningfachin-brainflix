import React from 'react';
import thumbnail from '../assets/Images/Upload-video-preview.jpg';

export default function Upload() {
    return (
        <>
            <hr />
            <div className="upload">

                <h1>Upload Video</h1>
                <hr />
                <div className="upload__details">
                    <div>
                        <h5 className="upload__thumb-heading">VIDEO THUMBNAIL</h5>
                        <img className="upload__thumbnail" src={thumbnail} alt="" />
                    </div>
                    <div>
                        <h5 className="upload__thumb-heading">TITLE YOUR VIDEO</h5>
                        <input className="upload__input" type="text" name="videoTitle" placeholder="Add a title to your video" />
                        <h5 className="upload__thumb-heading">ADD A VIDEO DESCRIPTION</h5>
                        <textarea className="upload__input" rows="2" placeholder="Add a description of your video" />
                    </div>
                </div>
                <hr />
                <button className="upload__btn-cancel">CANCEL</button>
                <button className="upload__btn-publish">PUBLISH</button>
            </div>
        </>
    );
}
