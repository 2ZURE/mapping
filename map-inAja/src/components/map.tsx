import { useEffect } from 'react';
import Map from 'ol/Map.js';
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';
import { fromLonLat } from 'ol/proj'; // Import untuk konversi koordinat

const MapComponent = () => {
  useEffect(() => {
    const map = new Map({
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      target: 'map', // memastikan elemen dengan ID 'map' tersedia
      view: new View({
        center: fromLonLat([114.84029, -3.44254]), // Koordinat Banjarbaru
        zoom: 12, // Sesuaikan tingkat zoom
      }),
    });

    // Membersihkan map saat komponen unmount
    return () => {
      map.setTarget();
    };
  }, []);

  return (
    <div
      id="map"
      style={{ width: '100%', height: '100%' }} // Memastikan peta memenuhi elemen induk
    ></div>
  );
};

export default MapComponent;
