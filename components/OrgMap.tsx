// npm install leaflet
// npm install @types/leaflet --save-dev
"use client";
import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface MapWidgetProps {
  lat: number; // Latitude for the center of the map
  lng: number; // Longitude for the center of the map
  zoom: number; // Zoom level for the map
}

const OrgMap: React.FC<MapWidgetProps> = ({ lat, lng, zoom }) => {
  const mapRef = useRef(null);
  const mapInstance = useRef<L.Map | null>(null);

  useEffect(() => {
    if (mapRef.current && !mapInstance.current) {
      mapInstance.current = L.map(mapRef.current).setView([lat, lng], zoom);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapInstance.current);

      const redIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });

      L.marker([lat, lng], { icon: redIcon }).addTo(mapInstance.current);
    }

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, [lat, lng, zoom]);

  return <div id="map" ref={mapRef}       
  className="h-[400px] w-[400px] sm:h-[200px] sm:w-[4200px] md:h-[400px] md:w-[400px] lg:h-[600px] lg:w-[600px] border border-gray-300 shadow-lg rounded-lg overflow-hidden transition-all"
  ></div>;
};

export default OrgMap;


/*
npm install leaflet
npm install @types/leaflet --save-dev

"use client";
import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface NGO {
  id: number;
  name: string;
  lat: number;
  lng: number;
}

interface MapWidgetProps {
  lat: number; // Latitude for the center of the map (user's location)
  lng: number; // Longitude for the center of the map (user's location)
  zoom: number; // Zoom level for the map
  ngos: NGO[]; // Array of NGO locations to display on the map
}

const OrgMap: React.FC<MapWidgetProps> = ({ lat, lng, zoom, ngos }) => {
  const mapRef = useRef(null);
  const mapInstance = useRef<L.Map | null>(null);

  useEffect(() => {
    if (mapRef.current && !mapInstance.current) {
      // Initialize the map
      mapInstance.current = L.map(mapRef.current).setView([lat, lng], zoom);

      // Add OpenStreetMap tiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapInstance.current);

      // Custom icon for the NGOs
      const ngoIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });

      // Add a marker for each NGO
      ngos.forEach(ngo => {
        L.marker([ngo.lat, ngo.lng], { icon: ngoIcon })
          .addTo(mapInstance.current)
          .bindPopup(ngo.name); // Optional: Display the NGO's name on click
      });
    }

    return () => {
      // Clean up the map instance on component unmount
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, [lat, lng, zoom, ngos]); // Include ngos in the dependency array to re-render markers when ngos change

  return <div id="map" ref={mapRef} className="h-[400px] w-[400px] sm:h-[200px] sm:w-[4200px] md:h-[400px] md:w-[400px] lg:h-[600px] lg:w-[600px] border border-gray-300 shadow-lg rounded-lg overflow-hidden transition-all"></div>;
};

export default OrgMap;




*/