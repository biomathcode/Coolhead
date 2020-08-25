import React,{useCallback, ChangeEvent} from 'react'
import {useAudioPlayer} from "react-use-audio-player"

const AudioPlayer = ({file}) => {
    const {togglePlayPause, ready, loading, playing,loop, volume} = useAudioPlayer({
        src: file,
        format: "mp3",
        autoplay: false,
        loop: true,
        controls: true
    })
    const handleChange = useCallback(
        (slider: ChangeEvent<HTMLInputElement>) => {
            const volValue = parseFloat(
                (Number(slider.target.value) / 100).toFixed(2)
            )
            return volume(volValue)
        },
        [volume]
    )

    if(!ready && !loading) return <div>No audio to play</div>
    if(loading) return <div> Loading audio</div>
    return(
        <div>
            <button onClick={togglePlayPause}>{playing ? "Pause" : "Play" }</button>
            <input 
                type='range'
                min={0}
                max={100}
                onChange={handleChange}
                defaultValue= {70}
            />
        </div>
    )
}
export default AudioPlayer