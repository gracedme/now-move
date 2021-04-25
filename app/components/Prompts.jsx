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

const shapes = [
  '_',
  '|',
  '+',
  'X',
  '=',
  '~',
  'O',
  'T',
  'Y',
  'U',
  '/\\',
  'V'
];

const patterns = [
  'one, two, threeeeee',
  'one, two, both',
  'single, single, double',
  'boom, boom, kha',
  'up, up, up, down'
];

const body = [
  'arm',
  'leg',
  'hand',
  'chest',
  'hips',
  'knees',
  'neck',
  'elbows',
  'feet',
  'head'
]

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

const combos = [
  [body, patterns],
  [body, shapes],
  [shapes, patterns],
  [grooves, body]
]

const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/* the main page for the index route of this app */
const Prompts = function() {
  const [combo, setCombo] = React.useState(combos[getRandomNumber(0, combos.length - 1)])
  const [comboOne, setComboOne] = React.useState(combo[0]);
  const [comboTwo, setComboTwo] = React.useState(combo[1]);
  const [colour, setColour] = React.useState(colours[getRandomNumber(0, colours.length - 1)])
  
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setComboOne(comboOne[getRandomNumber(0, comboOne.length - 1)]);
      setComboTwo(comboTwo[getRandomNumber(0, comboTwo.length - 1)]);
      setColour(colours[getRandomNumber(0, colours.length - 1)])
    }, 5000);
    
    return () => clearTimeout(timeout);
  }, [comboOne, comboTwo, colour]);
  
  return (
    <div>

      <h1 style={{color: colour, fontFamily: 'Arial', fontSize: 100}}>{comboOne}</h1>
      <br />
      <h1 style={{color: colour, fontFamily: 'Arial', fontSize: 100}}>{comboTwo}</h1>
      
    </div>
  );
}

module.exports = Prompts;