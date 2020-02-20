import React, { Component } from 'react';
import axios from 'axios';
import MainVideo from './MainVideo'
import MainVideoDetails from './MainVideoDetails'
import AddComment from './AddComment'
import Comment from './Comment'
// import { BrowserRouter as Router, Link } from "react-router-dom";
import CommentsList from './CommentsList'
import NextVideo from './NextVideo'

class MainContent extends Component {

    state = {
        listComments: []
    };


    componentDidMount() {

        // getting data with Axios with arrow function
        axios.get("https://project-2-api.herokuapp.com/videos/1a3cjruucpf7?api_key=9a9fc026-4b85-43b1-a00a-ecf8587e838f")
            .then(response => {
                this.setState({
                    arrayComments: response.data,
                    listComments: response.data.comments
                });
                console.log(this.state.listComments)
            });
    }

    render() {

        if (this.state.listComments === "") {
            return <h1>LOADING</h1>
            // console.log(<h2>ERROR</h2>);
        } else

            return (
                <>
                    <MainVideo />
                    <main className="main-structure">
                        <section className="main-structure__left">
                            <MainVideoDetails />

                            <AddComment />

                            <div className="comments-list">
                                {
                                    this.state.listComments.map(comment => {
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


export default MainContent;