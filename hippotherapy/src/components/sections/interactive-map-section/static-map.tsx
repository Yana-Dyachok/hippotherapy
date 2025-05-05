import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { customIcon } from './custom-icon';
import type { GeoJsonObject } from 'geojson';

const StaticMapWithLink = () => {
  const [geoData, setGeoData] = useState<GeoJsonObject | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      fetch('/map/map.geojson')
        .then((res) => res.json())
        .then((data) => setGeoData(data));
    }
  }, []);

  return (
    <MapContainer
      center={[50.0, 15.0]}
      zoom={6}
      style={{ height: '500px', width: '100%' }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {geoData && <GeoJSON data={geoData} />}
      <Marker position={[50.5, 14.5]} icon={customIcon}>
        <Popup></Popup>
      </Marker>
    </MapContainer>
  );
};
export default StaticMapWithLink;
