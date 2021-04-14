import React,{useState} from 'react';
import ReactPlayer from 'react-player'


const Player = () => {
    return (
        <ReactPlayer url="https://www.youtube.com/watch/v=ysz5S6PUM-U" />
    )
}

const URLForm= () => {
    const [url, setUrl] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!url) return;
        

    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                value={url}
                onChange={e => setUrl(e.target.value)}
            />
        </form>
    )
}
