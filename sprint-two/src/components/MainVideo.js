import React from 'react';
// import video0 from '../assets/Images/video-list-0.jpg';

export default function mainVideo() {
    return (
        <main className="video">
            <video className="video__player" controls poster='https://i.imgur.com/l2Xfgpl.jpg'>
                <source src="movie.mp4" type="video/mp4" />
                <source src="movie.ogg" type="video/ogg" />
            </video>
        </main>
    );
}
