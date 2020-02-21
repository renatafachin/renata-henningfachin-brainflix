import React from 'react';
import viewIcon from '../assets/Icons/SVG/Icon-views.svg';
import likeIcon from '../assets/Icons/SVG/Icon-likes.svg';
import DataConvert from '../components/DataConvert.js';

export default function mainVideo(props) {
    const { title, channel, description, views, likes, timestamp } = props;

    return (
        <div className="video__details">
            <h1 className="video__details__title">{title}</h1>
            <div className="video__details-top">
                <div className="video__details-author-date">
                    <h3>{channel}</h3>
                    <h4 className="video__details-author-date__date"><DataConvert value={timestamp} /></h4>
                </div>
                <div className="video__details__views-likes">
                    <img className="video__details__icon" src={viewIcon} alt="Views" />
                    <h4 className="video__details__nums">{views}</h4>
                    <img className="video__details__icon" src={likeIcon} alt="Likes" />
                    <h4 className="video__details__nums video__details__nums-right">{likes}</h4>
                </div>
            </div>
            <hr className="video__divider"></hr>
            <span>
                <h4 className="video__details__description">
                    {description}
                </h4>
            </span>
            <h3 className="video__comments-total">3 Comments</h3>
        </div>
    );
}
