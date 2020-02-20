import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Video extends Component {

    render() {
        const { id, title, channel, image } = this.props;
        let videoLink = `/video/${id}`
        return (
            <div className="next-video__item">
                <div className="next-video__left">
                    <Link to={videoLink}><img className="next-video__video" src={image} alt="" /></Link>
                </div>
                <div className="next-video__right">
                    <span>
                        <h4 className="next-video__title">{title}</h4>
                    </span>
                    <span>
                        <h4>{channel}</h4>
                    </span>
                </div>
            </div >
        );
    }
}

export default Video;