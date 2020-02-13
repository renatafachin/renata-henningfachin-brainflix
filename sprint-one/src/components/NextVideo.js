import React from 'react';
import video from '../assets/Images/video-list-1.jpg';

function NextVideo(props) {
    console.log(props.allVideos);
    const allVideos = (props.allVideos);
    const videoList = allVideos.map(allVideos => {
        return (
            <>
                <div className="next-video__item">
                    <div className="next-video__left">
                        <img className="next-video__video" src={video} alt="" />
                    </div>
                    <div className="next-video__right">
                        <span>
                            <h4 className="next-video__title">{allVideos.title}</h4>
                        </span>
                        <span>
                            <h4>{allVideos.author}</h4>
                        </span>
                    </div>
                </div>
            </>

        );
    })
    return (
        <div className="next-video">
            <h2 className="next-video__heading">NEXT VIDEO</h2>
            {videoList}

        </div>
    );
}

export default NextVideo;