import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
export const Map = () => {
  return (
    <MapContainer
      className="w-[600px] xs:h-[300px] lg:w-full rounded-md h-[400px]"
      center={[52.511063, 13.38297]}
      zoom={15}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[52.51099, 13.38287]}>
        <Popup>
          Nike
          <br /> Shop
        </Popup>
      </Marker>
    </MapContainer>
  );
};
