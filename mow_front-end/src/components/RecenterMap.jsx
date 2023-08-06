import { useEffect } from "react";
import { useMap } from "react-leaflet";

const RecenterMap = ({ location }) => {
  const map = useMap();

  useEffect(() => {
    if (location) {
      map.setView(location);
    }
  }, [location, map]);

  return (
    <>
      <div>recenter map</div>
    </>
  );
};

export default RecenterMap;
