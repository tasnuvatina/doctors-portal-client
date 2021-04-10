import React from "react";
import InfoCard from "../InfoCard/InfoCard";
//font awesome
import {
  faClock,
  faMapMarker,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
let InfosData = [
  {
    title: "Opening Hours",
    description: "We are open from 8am to 8pm",
    icon: faClock,
    background: "primary",
  },
  {
    title: "Visit Our Location",
    description: "Brooklyn NY 13000,United States",
    icon: faMapMarker,
    background: "dark",
  },
  {
    title: "Contact Us Now",
    description: "+0001 123 456 789",
    icon: faPhone,
    background: "primary",
  },
];

const BusinessInfo = () => {
  return (
    <section className="row">
      <div className='w-75 row mx-auto'>
        {InfosData.map((info) => (
          <InfoCard info={info}></InfoCard>
        ))}
      </div>
    </section>
  );
};

export default BusinessInfo;
