import React,{useState} from 'react';
import styled from 'styled-components'
import {ReactComponent as PlusIcon} from './plus.svg'
import {Link} from 'react-router-dom'
import './fabstyles.css'


const FloatingButton = () => {
    const [open, setOpen] = useState(false);

    return ( 
        <div className={open ? "fab open ": "fab"} onClick={() => setOpen(!open)}>
            <div className="trigger">
                <span>+ </span>
                <div className="actions">
                    
                    <div className="action" >
                    <Link to="/productivity">
                     P
                     <div className="tooltip">
                        Productivity
                     </div>
                     </Link>
                    </div>
                    
                    <div className="action">
                    <Link to="/meditation">
                     M
                     <div className="tooltip">
                        Meditation
                     </div>
                     </Link>
                    </div>
                    
                    <div className="action">
                     <Link to="audiobooks">
                     A
                     <div className="tooltip">
                        AudioBooks
                     </div>
                     </Link>
                    </div>
                    <div className="action">
                    <Link to="podcasts">
                     P
                     <div className="tooltip">
                        Podcasts
                     </div>
                     </Link>
                    </div>
                    

                </div>
            </div>
        </div>
     );
}
 
export default FloatingButton;