import { Suspense } from "react";
import CountryPage from "./countryPage";

export default function CountryWrapper() {
  return (
    <Suspense fallback={<div className="px-14 my-32">Loading country details...</div>}>
      <CountryPage />
    </Suspense>
  );
}
