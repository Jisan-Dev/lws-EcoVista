import AQIComponent from "@/components/AQIcomponent";

const AQIPage = ({ params: { location }, searchParams: { latitude, longitude } }) => {
  return <AQIComponent lat={latitude} lon={longitude} />;
};

export default AQIPage;
