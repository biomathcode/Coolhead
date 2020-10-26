import React from 'react';

import Night from "./svg/Night"

const Icon = props => {
    switch (props.name) {
        case "night":
            return <Night {...props} />;
        default:
            return;
    }
}

export default Icon;