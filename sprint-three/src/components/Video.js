import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Video extends Component {

    render() {
        const { id, title, channel, image } = this.props;
        let videoLink = `/video/${id}`
        console.log(title);

        let cutTitle = cutStr(title);
        function cutStr(title) {
            let arrTitle = title.split(" ");
            let result = "";

            for (let i = 0; i < arrTitle.length; i++) {
                const word = arrTitle[i];

                if (result.length + word.length < 37) {
                    result = result.concat(word).concat(" ");
                } else {
                    break;
                }

            };
            result = title.length > 37 ? result.concat("...") : title;
            return result
        }

        return (
            <div className="next-video__item">
                <div className="next-video__left">
                    <Link to={videoLink}><img className="next-video__video" src={image} alt="" /></Link>
                </div>
                <div className="next-video__right">
                    <span>
                        <Link className="next-video__link" to={videoLink}>
                            <h4 className="next-video__title--cut">{cutTitle}</h4>
                            <h4 className="next-video__title--full">{title}</h4>
                        </Link>
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