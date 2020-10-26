import React from 'react';
import Player from './components/FinalPlayer'


import Firefly from './Media/Firefly.mp3'
import HeavyRain from './Media/heavy_rain.mp3'
import IceSkating from './Media/ice-skating.mp3'
import DogPanting from './Media/dog-panting-breathing-fast.mp3'

//lofi_audio
// import Ainouta from './Media/lofi_audio/Ainouta-WZwtfh1XSNU.mp3'
// import Chikai from './Media/lofi_audio/Chikai-WnRSOVz_R0I.mp3'
// import Gaishutsu from './Media/lofi_audio/Gaishutsu-zha7CGHDrrg.mp3'
// import Habataku from './Media/lofi_audio/Habataku-WcygXfHR7-Q.mp3'
// import Happa from './Media/lofi_audio/Happa-gGa42q1VbwI.mp3'
// import Hinome from './Media/lofi_audio/Hinome-QSaZw4IMqM0.mp3'
// import Ichiru from './Media/lofi_audio/Ichiru-Yg6ktp-lsf4.mp3'
// import Kemuri from './Media/lofi_audio/Kemuri-q6hzm4SmjLM.mp3'
// import Michikusa from './Media/lofi_audio/Michikusa-APECEIyDRtY.mp3'
// import Murasaki from './Media/lofi_audio/Murasaki-ZzQHmT27NNE.mp3'
// import Nangoku from './Media/lofi_audio/Nangoku-tJ6n825ILtc.mp3'
// import Omoi from './Media/lofi_audio/Omoi-0fHhyK9o8vo.mp3'
// import Osaka from './Media/lofi_audio/Osaka-Ncx5LeWXO4I.mp3'
// import Ringo from './Media/lofi_audio/Ringo-MYTc5N24AjM.mp3'
// import Shiranai from './Media/lofi_audio/Shiranai-QCElp9FWFYc.mp3'
// import Tadaima from './Media/lofi_audio/Tadaima-JDRn-4zYopg.mp3'
// import Wakare from './Media/lofi_audio/Wakare-rG_bvce2LpQ.mp3'
// import Yawaraka from './Media/lofi_audio/Yawaraka-ZZ4GoGnPr9g.mp3'
// import Yuki from './Media/lofi_audio/Yuki-eTqv06OvwL8.mp3'
// import Yutaka from './Media/lofi_audio/Yutaka-fYSpmmCpJjo.mp3'
import "./audiogrib.css"




const AudioGrib = () => {
    return (
        <div className="container">
            <Player url={Firefly} vector="night"/>
            
        </div>
    )
}
export default AudioGrib
        