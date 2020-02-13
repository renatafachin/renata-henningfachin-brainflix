import React, { Component } from 'react'
import uuid from "uuid/v1"
import Header from './components/Header'
import MainVideo from './components/MainVideo'
import Comments from './components/Comments'
import CommentsList from './components/CommentsList'
import NextVideo from './components/NextVideo'
import './styles/main.css';

export default class App extends Component {
  render() {
    // data
    const arrayComments = [
      {
        id: uuid(),
        name: "Gary Wong",
        timestamp: "12/18/2018",
        comment: "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!"
      },
      {
        id: uuid(),
        name: "Theodore Duncan",
        timestamp: "11/15/2018",
        comment: "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!"
      },
      {
        id: uuid(),
        name: "Micheal Lyons",
        timestamp: "12/12/2018",
        comment: "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed."
      }
    ];

    const arrayVideos = [
      {
        id: uuid(),
        title: "Les Houches The Hidden Gem Of The…",
        author: "Scotty Cranmer",
        image: ""
      },
      {
        id: uuid(),
        title: "Travel Health Useful Medical Information…",
        author: "Scotty Cranmer",
        image: ""
      },
      {
        id: uuid(),
        title: "Cheap Airline Tickets Great Ways To Save",
        author: "Emily Harper",
        image: ""
      },
      {
        id: uuid(),
        title: "Take A Romantic Break In A Boutique Hotel",
        author: "Ethan Owen",
        image: ""
      },
      {
        id: uuid(),
        title: "Choose The Perfect Accommodations",
        author: "Lydia Perez",
        image: ""
      },
      {
        id: uuid(),
        title: "Cruising Destination Ideas",
        author: "Timothy Austin",
        image: ""
      },
      {
        id: uuid(),
        title: "Train Travel On Track For Safety",
        author: "Scotty Cranmer",
        image: ""
      }
    ];

    return (
      <>
        <Header />
        <MainVideo />
        <Comments />
        <CommentsList allComments={arrayComments} />
        <NextVideo allVideos={arrayVideos} />
      </>
    )
  }
}