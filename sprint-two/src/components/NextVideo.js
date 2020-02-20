import React, { Component } from 'react';
import Video from './Video';


class NextVideo extends Component {
    render() {
        return (
            <div className="next-video">
                <h5 className="next-video__heading">NEXT VIDEO</h5>
                {
                    this.props.videos.map(video => {
                        return <Video key={video.id} id={video.id} title={video.title} channel={video.channel} image={video.image} />
                    })
                }
            </div>

        );
    }
}

export default NextVideo;