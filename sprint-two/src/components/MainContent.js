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

        // getting data with Axios with arrow function
        let id = "1a4kjruuedd9";
        axios.get("https://project-2-api.herokuapp.com/videos/" + id + "?api_key=9a9fc026-4b85-43b1-a00a-ecf8587e838f")
            .then(response => {
                this.setState({
                    videoDetails: response.data,
                });
            });
    }



    componentDidUpdate(prevProps, prevState) {

        if (prevProps.match.params.id !== this.props.match.params.id) {
            axios.get("https://project-2-api.herokuapp.com/videos/" + this.props.match.params.id + "?api_key=9a9fc026-4b85-43b1-a00a-ecf8587e838f")
                .then(response => {
                    this.setState({
                        videoDetails: response.data,
                    });

                });
        }
    }

    render() {
        const { title, channel, image, description, views, likes, timestamp, comments } = this.state.videoDetails;

        console.log(comments);

        if (!this.state.videoDetails.comments) {
            return <h1>LOADING</h1>
        } else {

            return (
                <>
                    <MainVideo image={image} />
                    <main className="main-structure">
                        <section className="main-structure__left">
                            <MainVideoDetails title={title} channel={channel} description={description} views={views} likes={likes} timestamp={timestamp} />
                            <AddComment />

                            <div className="comments-list">
                                {
                                    this.state.videoDetails.comments.map(comment => {
                                        return <Comment key={comment.id} id={comment.id} name={comment.name} comment={comment.comment} timestamp={comment.timestamp} />
                                    })
                                }
                            </div>
                        </section>
                        <aside className="main-structure__aside">
                            <NextVideo videos={this.props.videos} />
                        </aside>
                    </main>
                </>
            );
        };
    };
};


export default MainContent;