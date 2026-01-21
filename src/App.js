// import logo from './logo.svg';
import "./App.css";
import React, { useState } from "react";
import Navbar from "./Components/Navbar";

import Form from "./Components/Form";
import Alert from "./Components/Alert";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    const [theme, setTheme] = useState('ocean');

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };
const togglesMode = (selectedTheme) => {
    setTheme(selectedTheme);
    document.body.className = ''; 
    document.body.classList.add(`theme-${selectedTheme}`);
    showAlert(`${selectedTheme} mode has been enabled`, "success");
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "black";
      showAlert("Dark mode has been enabled", "success");
          document.title='Textutils - Dark mode'
          setInterval (()=>{
          document.title='Textutils is amazing'

          },3000,)

    } else {
      setMode("light");
      document.body.style.background = "white";
      showAlert("Light mode has been enabled", "success");
      document.title='Textutils - Light mode'
    }
  };

  return (
    <>
    {/* <Router> */}
      <Navbar title="Jerry" home="Home" mode={mode} toggleMode={toggleMode} togglesMode={togglesMode} />
      <Alert alert={alert} />
      <div className="container">
<Form heading="Enter the text to analyze below" mode={mode} theme={theme}/>
 

 {/* <div className="container">
        <Routes>
          <Route
            exact path="/form"
            element={
              <Form
                heading="Enter the text to analyze below"
                mode={mode}
                theme={theme}
              />
            }
          />
              <Route
           exact path="/about"
            element={
              <About
                heading="Enter the text to analyze below"
                mode={mode}
                theme={theme}
              />
            }
          />
        </Routes>
      </div> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
