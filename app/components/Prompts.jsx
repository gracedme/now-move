const React = require('react');

const colours = [
  'BlueViolet',
  'DarkMagenta',
  'DarkTurquoise',
  'DarkViolet',
  'DeepPink',
  'DodgerBlue',
  'HotPink',
  'Indigo',
  'MediumOrchid',
  'MediumPurple',
  'MediumSeaGreen',
  'MediumSlateBlue',
  'MediumTurquoise',
  'MediumVioletRed',
  'Rebeccapurple',
  'RoyalBlue',
  'SlateBlue'
]

const mix = {
  body: [
    'arms',
    'legs',
  //  'hand',
    'chest',
    'hips',
  //  'knees',
  //  'neck',
  //  'elbows',
  //  'feet',
    'head'
  ],
  shapes: [
 //   '_',
 //   '|',
    '+',
    'X',
    '=',
    '||',
    '~',
    'O',
    'T',
   // 'Y',
    'U',
    '/\\',
    'V'
  ],
  patterns: [
    'one! two! threeeeee',
    'one, two, both',
    'single, single, double',
    'boom, boom, kha',
    'up, up, up, down'
  ],
  grooves: [
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
  ],
};


const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/* the main page for the index route of this app */
const Prompts = function() {
  const handleSingleCheck = (e) => {
    setSelectedMix({
      ...selectedMix,
      [e.target.name]: e.target.checked
    })
  };
  
  const generatePrompts = () => Object.keys(selectedMix)
        .filter(k => selectedMix[k] === true)
        .map(m => mix[m][getRandomNumber(0, mix[m].length - 1)]);
  
  const [selectedMix, setSelectedMix] = React.useState({body: true, shapes: true, patterns: false, grooves: false});
  const [prompts, setPrompts] = React.useState(generatePrompts());
  const [colour, setColour] = React.useState(colours[getRandomNumber(0, colours.length - 1)]);
  
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setColour(colours[getRandomNumber(0, colours.length - 1)]);
      setPrompts(generatePrompts());
      
    }, 60000);
    
    return () => clearTimeout(timeout);
  }, [colour, prompts]);
  
  return (
    <div>
      {prompts.map(p => <h1 style={{color: colour, fontFamily: 'Arial', fontSize: 200}}>{p}</h1>)}
      
      <h2>Select from:</h2>
        {Object.keys(mix).map(k => {
          return (
            <span>
              <input type="checkbox" 
                name={k} 
                checked={selectedMix[k]} 
                onChange={handleSingleCheck} 
              />
              {k}
            </span>
          )})}
    </div>
  );
}

module.exports = Prompts;