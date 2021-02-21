const React = require('react');

const grooves = [
  'roger rabbit',
  'steve martin',
  'bart simpson',
  'reebok',
  'monestary',
  'smurf',
  'reject',
  'shamrock',
  'charleston',
  'biz markie',
  'ATL stomp',
  'cabbage patch'
];

const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/* the main page for the index route of this app */
const HelloWorld = function() {
  const [count, setCount] = React.useState(0);
  const [prompt, setPrompt] = React.useState(grooves[getRandomNumber(0, grooves.length - 1)]);
  
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setCount(getRandomNumber(0, grooves.length - 1));
      setPrompt(grooves[count])
    }, 60000);
    
    return () => clearTimeout(timeout);
  }, [count]);
  
  return (
    <div>
      <p>don't think</p>
      
      <p>just move</p>
      
      <h1>{prompt}</h1>
      
    </div>
  );
}

module.exports = HelloWorld;