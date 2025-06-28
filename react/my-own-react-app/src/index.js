import ReactDOM from 'react-dom/client'
import React from 'react';
import { Hello } from './ app.JS';

const root = ReactDOM.createRoot(document.getElementById('root'));

const h1Element=React.createElement('h1',{},'Hello i am coming via react element')
const h1ElementViaJsx=<h1>Hello,I am coming via jsx</h1>

console.log("VIA REACT ELEMNT",h1Element);
console.log("VIA JSX ELEMENT",h1ElementViaJsx);

//root.render(Hello());
root.render(<Hello />)
