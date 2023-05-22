import React from 'react';
import './App.css';
import Header from './Header';
import 'maplibre-gl/dist/maplibre-gl.css';
import Map from './Map';

function App() {

  return (
    <div className="App">
        <Header />
        <Map />
    </div>
  );
}

export default App;
