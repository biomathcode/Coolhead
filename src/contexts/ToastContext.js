import React from 'react';

function Toast({ Toast}) {
    // Function to decide how to render the content of the toast
    function renderItem(content) {
        if (typeof content == "function") {
            return content();
        } else {
            return <p>{JSON.stringify(content,null, 2)}</p>
        }
    }
}