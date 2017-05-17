// Get React library from the installed module dependencies
// Also get ReactDOM library (this renders to the DOM).
import React from 'react';
import ReactDOM from 'react-dom';

// 1. Create a new component. This component should produce some HTML.
const App = function() {
  return <div>Hi!</div>;
}

// 2. Take this component's generated HTML and put it in the DOM.
ReactDOM.render(<App />, document.querySelector('.container'));
