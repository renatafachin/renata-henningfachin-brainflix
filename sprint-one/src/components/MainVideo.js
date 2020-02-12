import React from 'react';
import video0 from '../assets/Images/video-list-0.jpg';
import viewIcon from '../assets/Icons/SVG/Icon-views.svg';
import likeIcon from '../assets/Icons/SVG/Icon-likes.svg';

export default function mainVideo() {
    return (
        <main className="video">
            <video className="video__player" controls poster={video0}>
                <source src="movie.mp4" type="video/mp4" />
                <source src="movie.ogg" type="video/ogg" />
            </video>
            <div className="video__details">
                <div>
                    <h1 className="video__details-title">BMX Rampage: 2018 Highlights</h1>
                    <div className="video__details-author-date">
                        <h2>By Red Cow</h2>
                        <h4 className="video__details-author-date__date">12/18/2018</h4>
                    </div>
                </div>
                <div className="video__details__views-likes">
                    <img className="video__details-icon" src={viewIcon} />
                    <h4 className="video__details-nums">1,001,023</h4>
                    <img className="video__details-icon" src={likeIcon} />
                    <h4 className="video__details-nums">110,985</h4>
                </div>
                <hr className="video__divider"></hr>
                <span>
                    <h5 className="video__details-description">
                        On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title.
                    </h5>
                </span>
            </div>
        </main>
    );
}
