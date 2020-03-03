import React, { Component } from 'react';
import axios from 'axios';
import MainVideo from './MainVideo'
import MainVideoDetails from './MainVideoDetails'
import AddComment from './AddComment'
import Comment from './Comment'
import NextVideo from './NextVideo'

class MainContent extends Component {

    state = {
        videoDetails: []
    };

    componentDidMount() {

        //getting data from videos.json
        let id = this.props.match.params.id;

        axios.get(`/api/videos/${id}`)
            .then(response => {
                this.setState({
                    videoDetails: response.data[0]
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    componentDidUpdate(prevProps, prevState) {

        let id = this.props.match.params.id;

        // getting video details 
        if (prevProps.match.params.id !== this.props.match.params.id) {
            axios.get(`/api/videos/${id}`)
                .then(response => {
                    this.setState({
                        videoDetails: response.data[0],
                    });

                });
        }

    }

    render() {
        const { id, title, channel, image, description, views, likes, timestamp } = this.state.videoDetails;

        if (!this.state.videoDetails.comments) {
            return <h5> Loading</h5>
        } else {
            let commTotal = this.state.videoDetails.comments.length;
            return (
                <>
                    <MainVideo image={image} />
                    <main className="main-structure">
                        <section className="main-structure__left">
                            <MainVideoDetails id={id} commentsTotal={commTotal} title={title} channel={channel} description={description} views={views} likes={likes} timestamp={timestamp} />
                            <AddComment />

                            <div className="comments-list">
                                {
                                    this.state.videoDetails.comments.map(comment => {
                                        return <Comment videoId={id} key={comment.id} id={comment.id} name={comment.name} comment={comment.comment} timestamp={comment.timestamp} />
                                    })
                                }
                            </div>
                        </section>
                        <aside className="main-structure__aside">
                            <NextVideo videoId={id} videos={this.props.videos} />
                        </aside>
                    </main>
                </>
            );
        };
    };
};

export default MainContent;