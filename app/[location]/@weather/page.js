import NoLocationInfo from "@/components/NoLocationInfo";
import WeatherComponent from "@/components/WeatherComponent";
import { getResolvedLatLon } from "@/lib/location-info";

const WeatherPage = async ({ params: { location }, searchParams: { latitude, longitude } }) => {
  const resolved = await getResolvedLatLon(location, latitude, longitude);

  if (resolved?.lat && resolved?.lon) {
    return <WeatherComponent lat={resolved?.lat} lon={resolved?.lon} />;
  } else {
    return <NoLocationInfo location={location} />;
  }
};

export default WeatherPage;
