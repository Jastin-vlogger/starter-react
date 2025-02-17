import { createElement } from 'react';
import { createRoot } from 'react-dom/client';

const heading = createElement( 'h1', {
    key: 'hi'
}, 'Heading 1 text');

// heading => object
const span = React.createElement('span', {
    key: 'span'
}, 'span 1');
const divElement = React.createElement('div', {
    key: 'd'
}, [heading, span]);
const root = createRoot(document.getElementById('root'));
root.render(divElement)
