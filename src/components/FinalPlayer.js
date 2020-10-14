//source :- https://stackoverflow.com/questions/47686345/playing-sound-in-reactjs

import React, { useState, useEffect} from 'react';

const useAudio = (url) => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);
    const [volume, setVolume] = useState(0.7)

    const toggle = () => setPlaying(!playing);
    
    useEffect(() => {
        playing ? audio.play() : audio.pause();
    },
    [playing]
    );
    useEffect(() => {
        audio.volume = volume
        audio.addEventListener('ended', function(){
            audio.currentTime = 0;
            this.play();
        })
    }, [])
    // I don't know hw it works it magic or something
    //don't try to touch it
    const handleVolume = (e) => {
        setVolume(e);
        audio.volume = e
    }

    return [playing, toggle, volume, handleVolume]
}
const Player = ({ url }) => {
    const [playing, toggle, volume, handleVolume] = useAudio(url);
  
    return (
      <div>
        <button onClick={toggle}>
        <span>
            {playing ? "Pause" : "Play"}
        </span></button>
        <input type="range" value={Math.round(volume * 100)}  onChange={(e) => handleVolume(e.target.value / 100)}  />
      </div>
    );
  };

  export default Player;