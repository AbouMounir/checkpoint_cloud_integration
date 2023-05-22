import React, { useEffect, useRef, useState } from 'react';
import maplibreGl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import "@maptiler/sdk/dist/maptiler-sdk.css";
import './Map.css';

function Map() {

   const ZOOM_LEVEL = 14;
   const [lng] = useState(139.753);
   const [lat] = useState(35.6844);
   const map = useRef(null);
   const mapContainer = useRef(null)
   const [API_KEY] = useState('ygZ8E5pBtqz00fTQbMJG')



useEffect(() => {
    if (map.current) return; //stops map from intializing more than once
    map.current = new maplibreGl.Map({
        container: mapContainer.current,
        style: `https://api.maptiler.com/maps/basic-v2/style.json?key=${API_KEY}`,
        center: [lng, lat],
        zoom: ZOOM_LEVEL
    });
    map.current.addControl(new maplibreGl.NavigationControl(), 'top-right');
    new maplibreGl.Marker({color: "#FF0000"})
    .setLngLat([lng,lat])
    .addTo(map.current);
});


  return (
    <div className="map-wrap" >
        <div ref={mapContainer} className="map">
        
        </div>
    </div>
  );
}

export default Map;
