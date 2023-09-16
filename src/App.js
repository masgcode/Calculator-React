import Input from './components/Input';
import Button from './components/Button';
import './App.css';
import { useState } from 'react';

function App() {
  const [text, setText] = useState('')
  const [calculateFinished, setCalculateFinished] = useState(false)

  const handleButtons = (str) => {
    if (calculateFinished) {
      setText(str)
      setCalculateFinished(false)
      return
    }

    if (text === '') {
      setText(str)
      return
    }

    setText(text + str)
  }

  const clear = () => {
    setText('')
  }

  const solveOperation = () => {
    // eslint-disable-next-line no-eval
    setText(eval(text))
    setCalculateFinished(true)
  } 

  return (
    <div className="App">
      <div className="main">
        <Input text={text} />
        <div className="container-button">
          <Button value='1' id='button_1' action={handleButtons} />
          <Button value='2' id='button_2' action={handleButtons}/>
          <Button value='3' id='button_3' action={handleButtons}/>
          <Button value='+' id='button_add' action={handleButtons}/>
          <Button value='4' id='button_4' action={handleButtons}/>
          <Button value='5' id='button_5' action={handleButtons}/>
          <Button value='6' id='button_6' action={handleButtons}/>
          <Button value='-' id='button_rest' action={handleButtons}/>
          <Button value='7' id='button_7' action={handleButtons}/>
          <Button value='8' id='button_8' action={handleButtons}/>
          <Button value='9' id='button_9' action={handleButtons}/>
          <Button value='*' id='button_multiply' action={handleButtons}/>
          <Button value='C' id='button_delete' action={clear}/>
          <Button value='0' id='button_0' action={handleButtons}/>
          <Button value='=' id='button_equal' action={solveOperation}/>
          <Button value='/' id='button_divide' action={handleButtons}/>
        </div>
      </div>
    </div>
  );
}

export default App;
