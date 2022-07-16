import React from "react";
import loaderSrc from '../../assets/loading.gif';
const Loader = props => (
    <div>
        <img 
        width="25px"
        alt="Loader icon"
        src={loaderSrc}/>
    </div>
);

export default Loader;