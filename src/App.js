
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";





function App() 
{
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert(
      {
        msg: message,
        type: type
      },
      setTimeout(() => {
        setAlert(null);
      }, 1500)
    )
}
const handlePageTitleChange = (newTitle) => {
  document.title = newTitle;
};
  const[mode,setMode]= useState('light');
  const toggleMode = ()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enable", "success");
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enable", "success");
    }
  }
 
  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode = {toggleMode}  />
      <Alert alert={alert}/>
      <div className="container my-3">
      <Switch>
          <Route exact path="/about">
            <About
                handlePageTitleChange={handlePageTitleChange}
              />
          </Route>
          <Route exact path="/">
          <TextForm heading="Enter your text to analyze here" mode={mode} showAlert={showAlert}/>
          </Route>
        </Switch>  
      </div>
      </Router>
    </>
  );
}

export default App;
