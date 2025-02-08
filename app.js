const heading = React.createElement('h1', {
    key: 'hi'
}, 'Heading 1');
const span = React.createElement('span', {
    key: 'span'
}, 'span 1');
const divElement = React.createElement('div', {
    key: 'd'
}, [heading, span]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(divElement)