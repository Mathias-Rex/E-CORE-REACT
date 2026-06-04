import CarrierSection from "../components/CareersSection";
import CarrierTitle from "../components/CarrierTitle";
import CarrierValues from "../components/CarrierValues";

export default function Carrier() {
  console.log("Carrier page loaded");
  return (
    <>
      <CarrierTitle />
      <CarrierSection />
      <CarrierValues />
    </>
  );
}
