import React from 'react';
import Player from './components/FinalPlayer'

import BirdsChirping from './Media/Ambience/BirdsChirping.wav'
import CargoTrain from './Media/Ambience/Cargo_train.mp3'
import Dripping from './Media/Ambience/Dripping2.wav'
import Forest from './Media/Ambience/Forest1.wav'
import HeavyRain from './Media/Ambience/heavy_rain.mp3'
import ThunderClose from './Media/Ambience/ThunderClose4.wav'
import VinylCrackle from './Media/Ambience/VinylCrackle1.wav'
import WaterFallStream from './Media/Ambience/WaterfallStream.wav'
import WavesLight from './Media/Ambience/WavesLight1.wav'
import WindChimes from './Media/Ambience/Windchimes1.wav'
import Stream from './Media/Ambience/Stream1.wav'
import RainLight from './Media/Ambience/Light1.wav'
import styled from 'styled-components' 

import { AudioPlayerProvider} from "react-use-audio-player"
const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 100px 100px 100px;
    gap: 30px 30px;
    grid-template-areas:
    ". . ."
    ". . ."
    ". . ."

 
`
const Header = styled.h2`
    color: white;
    cursor: default;
    text-decoration: none;
    transition: transform 0.3s ease-in;
    border-bottom: 1px solid #eee;
    
`
const Container = styled.div`
    display: grid;
    grid-template-rows: 1fr 5fr;
    min-width: 300px;
    border: 1px solid #0496ff;
    border-radius: 5px;
    padding: 10px;
    align-items: start;
    
`
const AudioGrib = () => {
    const BirdsChirping_url = "https://github.com/pratiksharm/Coolhead-Ambience/blob/main/BirdsChirping1.mp3"
    return (
        <>
            <Container>
            <Header>Ambience</Header>
            <Grid>
                <Player  url={BirdsChirping_url} vector="night"/>
                <Player  url={Forest} vector="wind"/>
                <Player  url={Stream} vector="water"/>
                <Player url={WavesLight} vector="wave"/>
                <Player url={RainLight} vector="rain"/>
                <Player url={WindChimes} vector="coffee"/>
                <Player url={ThunderClose} vector="thunder" />
                <Player url={CargoTrain} vector="train" />
            </Grid>
            </Container>
        </>
    )
}
export default AudioGrib
            