import DestinationHeader from "../DestinationHeader";
import DestinationPicker from "../DestinationPicker";
import { useState } from "react";

export default function DestinationPage() {
  const [activeTab, setActiveTab] = useState("");
  console.log(activeTab);
  return (
    <>
      <DestinationHeader />
      <DestinationPicker activeTab={activeTab} setActiveTab={setActiveTab} />
    </>
  );
}
