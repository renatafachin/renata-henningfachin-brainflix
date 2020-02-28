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
        // let id = "1af0jruup5gu";

        axios.get(`/api/videos/${id}`)
            .then(response => {
                this.setState({
                    videoDetails: response.data[0]
                });
                // console.log(this.state.videoDetails);
            })
            .catch(err => {
                console.log(err);
            });
        // console.log(this.state.videoDetails);
    }


    // componentDidMount() {

    //     // getting video details with Axios with arrow function
    //     let id = this.props.match.params.id;
    //     axios.get("https://project-2-api.herokuapp.com/videos/" + id + "?api_key=9a9fc026-4b85-43b1-a00a-ecf8587e838f")
    //         .then(response => {
    //             this.setState({
    //                 videoDetails: response.data,
    //             });
    //         });
    // }

    componentDidUpdate(prevProps, prevState) {

        let id = this.props.match.params.id;
        // getting video details with Axios with arrow function
        if (prevProps.match.params.id !== this.props.match.params.id) {
            axios.get(`/api/videos/${id}`)
                // axios.get("https://project-2-api.herokuapp.com/videos/" + this.props.match.params.id + "?api_key=9a9fc026-4b85-43b1-a00a-ecf8587e838f")
                .then(response => {
                    this.setState({
                        videoDetails: response.data[0],
                    });

                });
        }

        // if (this.props.match.params.commentId && this.props.match.params.commentId !== prevProps.match.params.commentId) {

        //     axios.delete("https://project-2-api.herokuapp.com/videos/" + this.props.match.params.id + "/comments/" + this.props.match.params.commentId + "?api_key=9a9fc026-4b85-43b1-a00a-ecf8587e838f")
        //         .then(response => {

        //             axios.get("https://project-2-api.herokuapp.com/videos/" + this.props.match.params.id + "?api_key=9a9fc026-4b85-43b1-a00a-ecf8587e838f")
        //                 .then(response => {
        //                     this.setState({
        //                         videoDetails: response.data,
        //                     });

        //                 });

        //         });
        // }

    }

    render() {
        const { id, title, channel, image, description, views, likes, timestamp } = this.state.videoDetails;

        if (!this.state.videoDetails.comments) {
            return <h5> Loading</h5>
        } else {
            let commTotal = this.state.videoDetails.comments.length;
            // let commTotal = "3";
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