import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
export const Map = () => {
  return (

    <MapContainer className='w-[600px] sm-x2:h-[300px] lg:w-full rounded-md h-[400px]' center={[52.511063, 13.382970]} zoom={15} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[52.510990, 13.382870]}>
        <Popup>
          Nike<br /> Shop
        </Popup>
      </Marker>
    </MapContainer>


  )
}
