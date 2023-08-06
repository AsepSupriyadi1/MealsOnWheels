import { useEffect, useMemo, useRef, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import RecenterMap from "./RecenterMap";
import axios from "axios";
import { reverseGeoCoding } from "../api/map";

const Maps = ({ setter }) => {
  const [geolocation, setGeoLocation] = useState(null);
  const [displayAddress, setDisplayAddress] = useState(null);
  const markerRef = useRef(null);

  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker) {
          const position = marker.getLatLng();
          setGeoLocation(position);
          reverseGeoCoding(position.lat, position.lng).then((response) => {
            setDisplayAddress(response.data);
            setter(response.data);
            console.log(response.data);
          });
          console.log(position);
        }
      },
    }),
    []
  );

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setGeoLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        // console.log(position.coords.latitude, position.coords.longitude);
        reverseGeoCoding(position.coords.latitude, position.coords.longitude).then((response) => {
          setDisplayAddress(response.data);
          setter(response.data);
          console.log(response.data);
        });
      });
    } else {
      console.log("your device is not supporting geolocation");
    }
  }, []);

  if (!geolocation) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (!displayAddress) return null;

  return (
    <>
      <section
        style={{
          height: "350px",
          width: "100%",
        }}
      >
        <MapContainer
          center={geolocation}
          zoom={16}
          scrollWheelZoom={false}
          style={{
            height: "100%",
          }}
        >
          <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={geolocation} draggable={true} eventHandlers={eventHandlers} ref={markerRef}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>

          <RecenterMap location={geolocation} />
        </MapContainer>
      </section>

      <div className="form-group mt-3">
        <label> Your Address : </label>
        <input type="text" className="w-100" disabled value={displayAddress.display_name} />
      </div>
    </>
  );
};

export default Maps;
