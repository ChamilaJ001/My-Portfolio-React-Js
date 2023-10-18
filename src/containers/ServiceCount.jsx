import React from "react";
import { ServiceCard } from "../components";

const ServiceCount = () => {
  return (
    <div className="w-45 mr-5 lg:w-full py-6 lg:py-24 mt-24 flex items-center justify-center flex-wrap gap-8">
      <ServiceCard count={"6+"} text={"Full-Stack Projects"} />
      <ServiceCard count={"100%"} text={"Reliable Service"} />
      <ServiceCard count={"10+"} text={"Happy Customers"} />
      <ServiceCard count={"100%"} text={"On Time Delivery"} />
    </div>
  );
};

export default ServiceCount;
