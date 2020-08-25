import React,{Component} from 'react'
import Timer from './Timer'
import QuoteMachine from './components/Quote_machine'
import {AudioPlayerProvider } from 'react-use-audio-player'
import Audioplayer from './AudioPlayer'
import StyledApp from './styled-components'

//Media file
import Firefly from './Media/Firefly.mp3'
import HeavyRain from './Media/heavy_rain.mp3'
import IceSkating from './Media/ice-skating.mp3'
import DogPanting from './Media/dog-panting-breathing-fast.mp3'

class App extends Component{
  render(){
    return (
      <div className="App">
        <QuoteMachine/>
        <Timer/>
        <AudioPlayerProvider>
            <Audioplayer file={Firefly}/>
        </AudioPlayerProvider>
        <AudioPlayerProvider>
            <Audioplayer file={HeavyRain}/>
        </AudioPlayerProvider>
        <AudioPlayerProvider>
            <Audioplayer file={IceSkating}/>
        </AudioPlayerProvider>
        <AudioPlayerProvider>
            <Audioplayer file={DogPanting} />
        </AudioPlayerProvider>
        <StyledApp/>
       
      </div>
    )
  }
}
export default App
