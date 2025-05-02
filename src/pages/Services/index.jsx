import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { services } from "../../constants";
import ServicesCard from "../../components/SeviceCard";

const Services = () => {
  return (
    <section className="py-16">
      <SectionTitle title="Dịch vụ của tôi" />
      <div className="container mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 ">
        {services.map((service, index) => (
          <div key={index}>
            <ServicesCard services={service} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
