import React, { Component } from 'react';
import Video from './Video';


class NextVideo extends Component {

    render() {

        return (
            <div className="next-video">
                <div className="next-video__list">
                    <h5 className="next-video__heading">NEXT VIDEO</h5>
                    {
                        this.props.videos.map(video => {
                            if (video.id === this.props.videoId) {
                                return null
                            } else {
                                return <Video key={video.id} id={video.id} title={video.title} channel={video.channel} image={video.image} />
                            }
                        })
                    }
                </div>
            </div>

        );
    }
}

export default NextVideo;