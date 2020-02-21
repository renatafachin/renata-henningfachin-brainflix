import React from 'react';

function MainVideo(props) {

    return (
        <main className="video">
            <video className="video__player" controls poster={props.image}>
                <source src="movie.mp4" type="video/mp4" />
                <source src="movie.ogg" type="video/ogg" />
            </video>
        </main>
    );
}
export default MainVideo