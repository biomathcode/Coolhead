import React from 'react';
import {MediaPlayer, VolumeControl} from '@cassette/player'
import '@cassette/player/dist/css/cassette-player.css';
import styled from 'styled-components'

const Container = styled.footer`
    position: fixed;
    bottom: 0;
`;
const playlist = [
    {
      url:
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      title: 'Big Buck Bunny'
    },
    {
      url:
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      title: 'Elephants Dream'
    }
  ];

  function PlaybackRateControl({ playbackRate, onSetPlaybackRate }) {
    return (
      <div style={{ color: 'white',display: 'flex', alignItems: 'center', }}>
        Speed: x
        <input
          type="number"
          min={0.5}
          max={3}
          step={0.25}
          value={playbackRate}
          onChange={e => onSetPlaybackRate(Number(e.target.value))}
          style={{ width: 50 }}
        />
        <VolumeControl/>
      </div>
    );
  }

const Player= () => {  
    return (
        <React.Fragment>
        <MediaPlayer
        playlist={playlist}
        controls={[
          'playpause',
        ]}
        />

        </React.Fragment>
        

      );
}

export default Player;