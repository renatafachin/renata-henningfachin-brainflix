import React from 'react';
import viewIcon from '../assets/Icons/SVG/Icon-views.svg';
import likeIcon from '../assets/Icons/SVG/Icon-likes.svg';

export default function mainVideo() {
    return (
        <div className="video__details">
            <h1 className="video__details__title">BMX Rampage: 2018 Highlights</h1>
            <div className="video__details-top">
                <div className="video__details-author-date">
                    <h3>By Red Cow</h3>
                    <h4 className="video__details-author-date__date">12/18/2018</h4>
                </div>
                <div className="video__details__views-likes">
                    <img className="video__details__icon" src={viewIcon} alt="Views" />
                    <h4 className="video__details__nums">1,001,023</h4>
                    <img className="video__details__icon" src={likeIcon} alt="Likes" />
                    <h4 className="video__details__nums video__details__nums-right">110,985</h4>
                </div>
            </div>
            <hr className="video__divider"></hr>
            <span>
                <h4 className="video__details__description">
                    On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title.
                    </h4>
            </span>
        </div>
    );
}
