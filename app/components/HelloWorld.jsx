const React = require('react');
const UnorderedList = require('./UnorderedList');

const dependenciesArray = [
  'express - middleware for the node server',
  'react - for generating the views of the app',
  'react-dom - powers the rendering of elements to the DOM, typically paired with React',
  'webpack - for bundling all the javascript',
  'webpack-cli - command line support for webpack',
  'jsx-loader - allows webpack to load jsx files'
];

const componentsMade = [
  'HelloWorld - which is the view you are seeing now!',
  'UnorderedList - which takes an array of "items" and returns a <ul> element with <li>, elements of each of those items within it',
];

const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/* the main page for the index route of this app */
const HelloWorld = function() {
  const [count, setCount] = React.useState(0);
  const [msg, setMsg] = React.useState('first msg');
  
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setCount(getRandomNumber(0, dependenciesArray.length - 1));
      setMsg(dependenciesArray[count])
    }, 3000);
    
    return () => clearTimeout(timeout);
  }, [count]);
  
  return (
    <div>
      <h1>Hello World!</h1>

      <p>This is a starter <a href="http://glitch.com">Glitch</a> app for React! It uses 
        only a few dependencies to get you started on working with React:</p>

      <UnorderedList items={dependenciesArray} />

      <p>Look in <code>app/components/</code> for two example components:</p>

      <UnorderedList items={componentsMade} />
      
      
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      
      <h1>{msg}</h1>
      
    </div>
  );
}

module.exports = HelloWorld;