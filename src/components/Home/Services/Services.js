import React from "react";
import flouride from '../../../images/flouride.png';
import cavity from '../../../images/cavity.png';
import whitenning from '../../../images/whitenning.png'
import ServiceDetail from "../ServiceDetail/ServiceDetail";

const serviceData=[
    {
        name:'Flouride Treatment',
        img:flouride
    },
    {
        name:'Cavity Filling',
        img:cavity
    },
    {
        name:'Teeth Whitening',
        img:whitenning
    }
]

const Services = () => {
  return (
    <section className='services-container mt-5'>
      <div className="text-center">
        <h5 style={{color:'#1cc7ca'}}>OUR SERVICES</h5>
        <h2>Services We Provide</h2>
      </div>
      <div className="row">
      <div className='w-75 row mx-auto mt-5 pt-3'>
        {serviceData.map((service) => (
          <ServiceDetail service={service}></ServiceDetail>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Services;
