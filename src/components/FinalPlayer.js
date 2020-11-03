//source :- https://stackoverflow.com/questions/47686345/playing-sound-in-reactjs

import React, { useState, useEffect} from 'react';
import Icon from '../Icons/IconProps';
import styled from 'styled-components'
const useAudio = (url) => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);
    const [volume, setVolume] = useState(0.7)
    //const [currentTime, setCurrentTime] = useState(0)

    const toggle = () => setPlaying(!playing);
    //const duration = audio.duration;
    //console.log(parseInt(duration/60),":", (duration%60));

    useEffect(() => {
        playing ? audio.play() : audio.pause();
    },
    [playing]
    );
    useEffect(() => {
        audio.volume = volume
        //audio.currentTime = currentTime;
        audio.loop = true;
        
        //audio.addEventListener('ended', function(){
        //    console.log('This has ended')
        //    audio.currentTime = 0;
        //    this.play();
        //})
    }, [])
    // I don't know hw it works it magic or something
    //don't try to touch it
    const handleVolume = (e) => {
        setVolume(e);
        audio.volume = e
    }

    return [playing, toggle, volume, handleVolume]
}
const Container= styled.div`
 position: relative;
 margin: 0px;

`

const Input = styled.input`
 position: absolute;
 z-index: 2;
 left: 0;
 top: 0;
 margin-top: 75px;
 max-width: 75px;
 color: ${({theme})=> theme.secondaryDark};
 background: transparent;
`
const Button = styled.button`
 position: absolute;
 cursor: pointer;
 background: #0D0C1D;
 padding:0;
 margin:0;
 z-index: 1;
 left: 0;
 top: 0;
 text-align: center;
 border: none;
 -webkit-appearance: none;
    -moz-appearance: none;
`
const Player = ({ url,vector}) => {
    const [playing, toggle, volume, handleVolume] = useAudio(url);
  
    return (
      <Container>
        <Button onClick={toggle}>
            <Icon name={vector} width={75} stroke={playing ? "#006DFF" : "#fff"} fill="none" />
        </Button>
        { playing && <Input type="range" value={Math.round(volume * 100)}  onChange={(e) => handleVolume(e.target.value / 100)}  />}
        
      </Container>
    );
  };

  export default Player;