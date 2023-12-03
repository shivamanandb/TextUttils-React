import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import TextArea from './component/TextArea';
import Alert from './component/Alert';

function App() {

  const[mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
      setAlert({
        msg : message,
        type : type
      })
    
      setTimeout(() => {
        setAlert(null);
      }, 1000);
  }

  

  const togglemode = () => {

    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has enabled", "success");
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has enabled", "success");
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={togglemode} showAlert={showAlert}/>
      <Alert alert = {alert}/>
      <TextArea heading="Enter the text to analyze below" mode={mode} toggleMode={togglemode} showAlert={showAlert}/>
    </>
  );
}

export default App;
