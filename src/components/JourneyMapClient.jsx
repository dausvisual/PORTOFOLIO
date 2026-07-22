'use client';

import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, GeoJSON, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import * as toGeoJSON from '@tmcw/togeojson';
import L from 'leaflet';

// Fix Leaflet icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Component to handle bounds updating when GeoJSON changes
function MapBoundsUpdater({ geoJsonData }) {
  const map = useMap();
  useEffect(() => {
    if (geoJsonData && geoJsonData.features && geoJsonData.features.length > 0) {
      const geoJsonLayer = L.geoJSON(geoJsonData);
      const bounds = geoJsonLayer.getBounds();
      if (bounds.isValid()) {
        map.fitBounds(bounds, { padding: [50, 50] });
      }
    }
  }, [geoJsonData, map]);
  return null;
}

// Fix missing tiles by invalidating size on mount
function MapResizer() {
  const map = useMap();
  useEffect(() => {
    setTimeout(() => {
      map.invalidateSize();
    }, 400);
  }, [map]);
  return null;
}

export default function JourneyMapClient() {
  const [geoJsonData, setGeoJsonData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  // Default view covering Sulawesi and Papua
  // Center roughly between Sulawesi and Papua
  const defaultCenter = [-2.5, 125.0];
  const defaultZoom = 5;

  useEffect(() => {
    const fetchStaticKML = async () => {
      setIsLoading(true);
      setErrorMsg(null);
      try {
        const response = await fetch('/data/journey.kml');
        if (!response.ok) {
          throw new Error('KML file not found or failed to load.');
        }
        const text = await response.text();
        const parser = new DOMParser();
        const kmlDoc = parser.parseFromString(text, 'text/xml');
        const geojson = toGeoJSON.kml(kmlDoc);
        setGeoJsonData(geojson);
      } catch (err) {
        console.error('Error loading static KML:', err);
        // We can just fail silently or set an error message
        // setErrorMsg('Gagal memuat data riwayat perjalanan.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchStaticKML();
  }, []);

  return (
    <div className="journey-map-wrapper">
      <div className="maps-header-container">
        <div className="maps-label">MAPS <span></span></div>
        <h2 className="maps-title">
          Peta Riwayat <span className="text-blue">Perjalanan</span>
        </h2>
        <p className="maps-desc">
          Perjalanan profesional di berbagai wilayah di Indonesia.
        </p>
      </div>

      {isLoading && <p className="map-loading-msg">Memuat data peta...</p>}
      {errorMsg && <p className="map-error-msg">{errorMsg}</p>}

      <div className="map-frame-container">
        <div className="map-frame">
          <MapContainer 
            center={defaultCenter} 
          zoom={defaultZoom} 
          className="my-leaflet-map"
          style={{ width: '100%', zIndex: 1 }}
          scrollWheelZoom={true}
          dragging={true}
        >
          <MapResizer />
          
          {/* ArcGIS World Imagery Basemap */}
          {/* Citra Satelit Esri / ArcGIS Pro */}
          <TileLayer
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
          />
          
          {/* Optional Overlay to make streets more visible on top of imagery */}
          <TileLayer
            url="https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}"
            attribution=""
          />

          {geoJsonData && (
            <>
              <GeoJSON 
                data={geoJsonData} 
                style={{
                  color: '#00e5ff',
                  weight: 3,
                  opacity: 0.8,
                  fillColor: '#00e5ff',
                  fillOpacity: 0.4
                }} 
              />
              <MapBoundsUpdater geoJsonData={geoJsonData} />
            </>
          )}
        </MapContainer>
        </div>

        <button className="map-gps-btn" aria-label="Current Location">
          <i className="bx bx-target-lock"></i>
        </button>
      </div>
    </div>
  );
}
