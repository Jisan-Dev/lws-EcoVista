import Image from "next/image";

const LocationDetectingLoader = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-slate-700 text-white">
      <Image
        src="/network.gif"
        alt="Loading..."
        height={500}
        width={500}
        className="border rounded-md my-4"
      />
      <p className="text-4xl text-center">Detecting Location...</p>
    </div>
  );
};

export default LocationDetectingLoader;
