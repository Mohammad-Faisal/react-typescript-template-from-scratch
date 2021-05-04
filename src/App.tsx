import React from 'react';
import image from './assets/image.jpg';
import { ClickCounter } from './components/ClickCounter';
import './App.css';

export const App = () => {
    const num = 0;
    return (
        <>
            <ClickCounter />
            {/* <img src={image}/> */}
            <h1 className="app"> This is asdf a asdfadsf and its</h1>
        </>
    );
};
