import React from 'react';

import Night from "./svg/Night"
import Wind from './svg/Wind'
import Water from './svg/Water'
import Wave from './svg/Wave'
import Coffee from './svg/Coffee'
import Train from './svg/Train'
import ThunderStorm from './svg/ThunderStorm'
import Rain from './svg/Rain'


const Icon = props => {
    switch (props.name) {
        case "night":
            return <Night {...props} />;
        case 'wind':
            return <Wind {...props} />;
        case 'water':
            return <Water {...props} />;
        case 'wave':
            return <Wave {...props} />
        case 'coffee':
            return <Coffee {...props} />
        case 'rain':
            return <Rain {...props} />
        case 'thunder':
            return <ThunderStorm {...props} />
        case 'train':
            return <Train {...props} />
        default:
            return;
    }
}

export default Icon;