export const getLocationData = async (lat, lon) => {
  try {
    const response = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=bn`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getLocationLatLonList = async () => {
  try {
    const response = await fetch(`http://localhost:3000/api/location`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getLocationLatLong = async (locationName) => {
  try {
    const response = await fetch(`http://localhost:3000/api/location/${locationName}`);
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e.message);
  }
};
