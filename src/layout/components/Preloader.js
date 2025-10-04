import React from 'react';
import './Preloader.css'

class Preloader extends React.Component
{
    render()
    {
        return(
            <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        );
    }
}

export default Preloader;