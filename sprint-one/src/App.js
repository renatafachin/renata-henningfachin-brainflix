import React, { Component } from 'react'
import Header from './components/Header'
import MainVideo from './components/MainVideo'
import Comments from './components/Comments'
import './styles/main.css';

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <MainVideo />
        <Comments />
      </>
    )
  }
}