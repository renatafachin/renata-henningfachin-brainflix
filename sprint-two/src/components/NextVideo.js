import React from 'react';

function NextVideo(props) {
    const allVideos = (props.allVideos);
    const videoList = allVideos.map(allVideos => {
        return (
            <div key={allVideos.id}>
                <div className="next-video__item">
                    <div className="next-video__left">
                        <img className="next-video__video" src={allVideos.url} alt="" />
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
            </div>

        );
    })
    return (
        <div className="next-video">
            <h5 className="next-video__heading">NEXT VIDEO</h5>
            {videoList}

        </div>
    );
}

export default NextVideo;