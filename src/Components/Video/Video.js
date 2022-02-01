import React from 'react';
import { useState } from 'react/cjs/react.development';

const Video = ({ vid }) => {
    const [mute, setMute] = useState(true)

    const style = {
        width: "50rem",
        backgroundImage: "linear-gradient(105deg, rgba(0, 249, 255, 1) 39 %, rgba(51, 56, 57, 1) 96 %)",
        background: "#141414"
    }
    const buttonStyle = {
        position: "absolute",
        left: 20,
        top: 50,
        background: "transparent",
        border: "none"
    }
    return (
        <div style={{ position: "relative", height: "28.125rem" }}>
            <video style={style} muted={mute} autoPlay src={vid}></video>
            <button style={buttonStyle} onClick={() => setMute(!mute)}><img style={{ width: "3rem" }} src={mute ? "images/mute.svg" : "images/unMute.svg"} alt="" /></button>
        </div >
    );
};

export default Video;