import React, {useState} from 'react';
// import axios from 'axios'; 

function App() {

  // const url = `https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=e4fec9003589ca99adaccd20e23926ee`
  return (
    <div className="app">
     <div className="container">
      <div className="top">
        <div className="location">
          <p>Dallas</p>
        </div>
        <div className="temp">
          <h1>60F</h1>
        </div>
        <div className="description">
          <p>Clouds</p>
        </div>
      </div>
     </div>
    </div>
  );
}

export default App;
