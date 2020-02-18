import React, { Component } from 'react'
import uuid from "uuid/v1"
import Header from './components/Header'
import MainVideo from './components/MainVideo'
import MainVideoDetails from './components/MainVideoDetails'
import Comments from './components/Comments'
import CommentsList from './components/CommentsList'
// import DataConvert from './components/DataConvert'
import NextVideo from './components/NextVideo'
import './styles/main.css';

export default class App extends Component {
  render() {
    // data
    const arrayComments = [
      {
        id: uuid(),
        name: "Micheal Lyons",
        timestamp: "12/12/2018",
        comment: "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed."
      },
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
      }
    ];

    const arrayVideos = [
      {
        id: uuid(),
        title: "Become A Travel Pro In One Easy Lesson…",
        author: "Scotty Cranmer",
        url: "/images/video-list-1.jpg"
      },
      {
        id: uuid(),
        title: "Les Houches The Hidden Gem Of The…",
        author: "Scotty Cranmer",
        url: "/images/video-list-2.jpg"
      },
      {
        id: uuid(),
        title: "Travel Health Useful Medical Information…",
        author: "Scotty Cranmer",
        url: "/images/video-list-3.jpg"
      },
      {
        id: uuid(),
        title: "Cheap Airline Tickets Great Ways To Save",
        author: "Emily Harper",
        url: "/images/video-list-4.jpg"
      },
      {
        id: uuid(),
        title: "Take A Romantic Break In A Boutique Hotel",
        author: "Ethan Owen",
        url: "/images/video-list-5.jpg"
      },
      {
        id: uuid(),
        title: "Choose The Perfect Accommodations",
        author: "Lydia Perez",
        url: "/images/video-list-6.jpg"
      },
      {
        id: uuid(),
        title: "Cruising Destination Ideas",
        author: "Timothy Austin",
        url: "/images/video-list-7.jpg"
      },
      {
        id: uuid(),
        title: "Train Travel On Track For Safety",
        author: "Scotty Cranmer",
        url: "/images/video-list-8.jpg"
      }
    ];

    return (
      <>
        <Header />
        <MainVideo />
        <main className="main-structure">
          <section className="main-structure__left">
            <MainVideoDetails />
            <Comments />
            <CommentsList allComments={arrayComments} />
          </section>
          <aside className="main-structure__aside">
            <NextVideo allVideos={arrayVideos} />
          </aside>
        </main>
      </>
    )
  }
}