import React, { Component } from 'react';
import axios from 'axios';

class Upload extends Component {

    handleFormSubmit = event => {
        event.preventDefault();
        let newId = "";

        axios
            .post("/api/videos", {
                title: event.target.videoTitle.value,
                channel: event.target.videoChannel.value,
                description: event.target.videoDescription.value,
                image: event.target.videoImage.value,
            })
            .then(res => {
                console.log(res.data);
                newId = res.data;
                window.location.replace(`/video/${newId}`);
            })
            .catch(err => {
                console.log(err);
            });

        // console.log(newId);
        // event.target.reset();
    };
    render() {

        return (
            <>
                <hr className="upload__hr--mobile" />
                <div className="upload">

                    <form onSubmit={this.handleFormSubmit}>
                        <h1 className="upload__heading">Upload Video</h1>
                        <hr className="upload__hr--tablet-desk" />
                        <div className="upload__details">
                            <div className="upload__thumb-section">
                                <h5 className="upload__thumb-heading">VIDEO THUMBNAIL</h5>
                                <img className="upload__thumbnail" src="https://d17fnq9dkz9hgj.cloudfront.net/uploads/2018/03/Russian-Blue_01.jpg?resize=960,540" alt="" />
                            </div>
                            <div className="upload__form-section">
                                <h5 className="upload__thumb-heading">TITLE YOUR VIDEO</h5>
                                <input className="upload__input-title" type="text" name="videoTitle" placeholder="Add a title to your video" required />
                                <h5 className="upload__thumb-heading">ADD A VIDEO DESCRIPTION</h5>
                                <textarea className="upload__input-description" name="videoDescription" rows="5" placeholder="Add a description of your video" required />
                                <input type="hidden" name="videoImage" value="https://d17fnq9dkz9hgj.cloudfront.net/uploads/2018/03/Russian-Blue_01.jpg?resize=960,540" />
                                <input type="hidden" name="videoChannel" value="Mohan Muruge" />
                            </div>
                        </div>
                        <hr className="upload__hr--tablet-desk" />
                        <div className="upload__buttons">
                            <button className="upload__btn-cancel">CANCEL</button>
                            <button className="upload__btn-publish">PUBLISH</button>
                        </div>
                    </form>
                </div>
            </>
        );
    };
}

export default Upload;