import LocationDetector from "@/components/LocationDetector";
import { Suspense } from "react";

export default function HomePage() {
  return (
    <Suspense fallback={<div>Loading Location Info...</div>}>
      <LocationDetector />
    </Suspense>
  );
}
