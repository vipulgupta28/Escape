import { config } from "../config";

export const convertAddressToCoordinates = async (address: string) => {
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(address)}&key=${config.geolocationApiKey}`;

  const response = await fetch(url);
  const data = await response.json();

  if (data.results.length > 0) {
    const location = data.results[0].geometry;
    return { latitude: location.lat, longitude: location.lng };
  }
  return { latitude: null, longitude: null };
};
