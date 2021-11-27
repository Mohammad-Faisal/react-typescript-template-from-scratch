import React from 'react';
import image from './assets/image.jpg';
import { ClickCounter } from './components/ClickCounter';
import './App.css';

export const App = () => {
    return (
        <div>
            <ClickCounter />
            <img style={{ width: '500px', height: '300px' }} src={image} alt="placeholder" />
            <h1 className="app"> This is a react app which is built from scratch</h1>
        </div>
    );
};
