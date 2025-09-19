import LocationDetectingLoader from "@/components/LocationDetectingLoader";
import LocationDetector from "@/components/LocationDetector";
import { Suspense } from "react";

export default function HomePage() {
  return (
    <Suspense fallback={<LocationDetectingLoader />}>
      <LocationDetector />
    </Suspense>
  );
}
