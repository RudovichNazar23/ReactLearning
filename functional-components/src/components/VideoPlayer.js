import { useState, useRef } from "react";

const VIDEO_SRC = "https://images-assets.nasa.gov/video/One%20Small%20Step/One%20Small%20Step~orig.mp4";

function VideoPlayer(){
    const [isPlaying, setPlaying] = useState(false);

    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    
    const onCLickPlay = () => video.current.play();
    const onClickPause = () => video.current.pause();

    const video = useRef();

    return (
        <section>
            <video 
            ref={video}
            src={VIDEO_SRC} 
            controls 
            width="480" 
            onPlay={onPlay} 
            onPause={onPause} 
            />
            <button onClick={isPlaying ? onClickPause : onCLickPlay}>
                {isPlaying ? "Pause" : "Play"}
            </button>
        </section>
    );

}

export default VideoPlayer;