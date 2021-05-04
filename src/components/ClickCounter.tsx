import React, { useState } from 'react';

export const ClickCounter = () => {
    const [count, setcount] = useState(0);
    return <button onClick={() => setcount((count) => count + 1)}> click counter{count} </button>;
};
