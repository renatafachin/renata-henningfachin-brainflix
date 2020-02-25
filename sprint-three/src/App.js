// https://project-2-api.herokuapp.com/videos?api_key=9a9fc026-4b85-43b1-a00a-ecf8587e838f

import React, { Component } from 'react'
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Header from './components/Header'
import MainContent from './components/MainContent'
import Upload from './components/Upload'
import './styles/main.css';

class App extends Component {

  state = {
    arrayVideos: [],
  };

  componentDidMount() {
    // getting data with Axios with arrow function
    axios.get("https://project-2-api.herokuapp.com/videos?api_key=9a9fc026-4b85-43b1-a00a-ecf8587e838f")
      .then(response => {
        this.setState({
          arrayVideos: response.data
        });
      });
  }

  render() {
    return (
      <Router>
        <>
          <Header />
          <Switch>
            <Redirect from="/" to="/video/1a4kjruuedd9" exact />
            <Route path="/video/:id" render={(renderProps) => <MainContent videos={this.state.arrayVideos} {...renderProps} />} />
            <Route path="/videos/:id/comments/:commentId" render={(renderProps) => <MainContent videos={this.state.arrayVideos} {...renderProps} />} />
            <Route path="/upload" component={Upload} />
          </Switch>
        </>
      </Router >
    )
  }
}

export default App;