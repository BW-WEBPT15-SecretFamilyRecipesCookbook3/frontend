import React from 'react';
import { Logout, YouTube, Twitter } from '../AppComponents/AllBtn';
import './navi.css';


const Social = () => {
    return(
        <div className="social-wrap">
            <Twitter />
            <YouTube />
            <Logout />
        </div>
    )
}
export default Social;