import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
     // 1. Initialize theme state

    const palettes = [
    { id: 'ocean', name: 'Blue', color: '#0d6efd' },
    { id: 'forest', name: 'Grey', color: '#c7c7c7' },
    { id: 'sunset', name: 'Orange', color: '#fd7e14' }
  ];
  // 2. Updated function to accept the selected theme ID
  // const toggleMode = (selectedTheme) => {
  //   setTheme(selectedTheme);
    
  //   // 3. Apply the theme attribute to the root element for global styling
  //   document.documentElement.setAttribute('data-theme', selectedTheme);
    
  //   // Optional: Keep your alert logic
  //   if (props.showAlert) {
  //     props.showAlert(`${selectedTheme} mode has been enabled`, "success");
  //   }
  // };
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  About
                </a>
              </li>
            
          
           
            </ul>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-primary" type="submit">
                Search
              </button>
            </form> */}

            <div
              className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}
            >
              <input
                onClick={props.toggleMode}
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="switchCheckChecked"
              />
              <label className="form-check-label" htmlFor="switchCheckChecked">
                Enable dark mode
              </label>
            </div>
            {/* <div className="button-group">
          {palettes.map((p) => (
            <button 
              key={p.id} 
              className={`btn btn-outline-primary mx-1 ${theme === p.id ? 'active' : ''}`}
              onClick={() => {props.togglesMode(p.id)}} 
            >
              {p.name}
            </button>
          ))}
        </div> */}

          <div className="d-flex align-items-center">
            {palettes.map((p) => (
              <div 
                key={p.id} 
                onClick={() => props.togglesMode(p.id)}
                style={{
                  height: '25px', width: '25px', backgroundColor: p.color, 
                  cursor: 'pointer', borderRadius: '50%', margin: '0 5px',
                  border: props.theme === p.id ? '2px solid white' : 'none'
                }}
                title={p.name}
              />
            ))}
          </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
