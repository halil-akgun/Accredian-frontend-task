import React from 'react';
import ContactExpertBtn from './ContactExpertBtn';

const Overlay = () => {

    return (
        <div id='overlay'>
            <div id='overlayContent'>
                <span id='overlayText'>Navigate your ideal career path with tailored expert advice </span>
                <ContactExpertBtn />
            </div>
        </div>
    );
}

export default Overlay;
