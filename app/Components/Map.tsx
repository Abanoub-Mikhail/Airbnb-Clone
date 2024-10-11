'use client'
import { searchData } from '../Types/Types';
import { getCenter } from 'geolib';
import 'leaflet/dist/leaflet.css'
import { MapContainer, Marker, Popup, TileLayer  } from 'react-leaflet';
import L from 'leaflet'
import Image from 'next/image';




const Map = ({searchData}:{searchData:searchData}) => {
  const coordinate = searchData.map((item)=>({longitude:item.long , latitude:item.lat}))

  const center = getCenter(coordinate) as {
    longitude: number;
    latitude: number;
  };

  
  const markerIcon = new L.Icon({
    iconUrl: '/app/marker-icon.png', // Adjust the path
    iconSize: [24, 24],
    iconClassName: 'leaflet-marker-icon', // Optional, but recommended
  });

  return (
 

    <MapContainer center={[center.latitude,center.longitude]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  {searchData.map((item)=>(
      <Marker key={item.lat} position={[item.lat,item.long]} icon={markerIcon}>
    <Popup>
      {item.title}
    </Popup>
  </Marker>
  ))}
</MapContainer>
  )
}

export default Map