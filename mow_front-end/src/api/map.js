import axios from "axios";

export const reverseGeoCoding = async (lat, lon) => {
  return await axios.get(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`);
};

export const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const earthRadius = 6371; // Radius bumi dalam kilometer

  // Mengkonversi koordinat menjadi radian
  const latRad1 = toRadians(lat1);
  const lonRad1 = toRadians(lon1);
  const latRad2 = toRadians(lat2);
  const lonRad2 = toRadians(lon2);

  // Selisih sudut latitute dan longitude
  const latDiff = latRad2 - latRad1;
  const lonDiff = lonRad2 - lonRad1;

  // Rumus Haversine
  const a = Math.sin(latDiff / 2) ** 2 + Math.cos(latRad1) * Math.cos(latRad2) * Math.sin(lonDiff / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  // Menghitung jarak
  const distance = earthRadius * c;

  return Math.floor(distance);
};

const toRadians = (degrees) => {
  return degrees * (Math.PI / 180);
};

export const calculateTime = (distance) => {
  let totalTime = distance / 30; // jarak minimal 40

  return totalTime * 60;
};
