import './App.css';
import Square from './SquareColor';
import Input from './Input';
import {useState} from 'react';

function App() {
  const [colorValue,setColorValue] = useState('orange')
  const [label, setLable] = useState('')
  const [title, setTitle] = useState('no title')
  return (
    <div className="App">
      <h1>{title}</h1>
      <Square 
        colorValue={colorValue}
        label={label}
      />
      <Input 
        colorValue={colorValue}
        setColorValue={setColorValue}
        variation={1}
      />
      <Input 
        label={label}
        setLable={setLable}
        variation={2}
      />
      <Input 
        title={title}
        setTitle={setTitle}
        variation={3}
      />
    </div>
  );
}

export default App;