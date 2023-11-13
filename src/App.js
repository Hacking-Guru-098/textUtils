import './App.css';
import Alert from './Components/Alert';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  const toggleMode=()=>{
    if (mode==='light'){
      setMode('dark')
      showAlert("dark mode has been enabled" , "success")
      document.body.style.backgroundColor = 'black'
      document.body.style.color = 'white'
      document.title="textUtils | Dark mode"
    }
    else{
      setMode('light')
      showAlert("dark mode has been disabled" , "success")
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      document.title="textUtils"
    }
  }
  const showAlert=(message , type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  return (
    <>  
      <div className="container my-3">
        <Router>
          <Navbar title="textUtils" mode={mode} toggleMode={toggleMode}/>
          <Alert alert = {alert}/>
          <Routes>
            <Route path='/about' element={<About/>} />
            <Route path='/' element={<TextForm showAlert={showAlert} heading = "Enter The Text To Analyze" mode={mode}/>} />
          </Routes>
        </Router>
      </div>
    </>
  );
}


export default App;
