import React from 'react';

function MainVideo(props) {

    return (
        <main className="video">
            <video className="video__player" controls poster={props.image}>
            </video>
        </main>
    );
}
export default MainVideo