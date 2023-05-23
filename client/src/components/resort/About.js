import React from "react";
import { useSelector } from "react-redux";

function About() {
  const resortData = useSelector((state)=>state.verifyResort.resortData)
  return (
    <>
      <h2 className="mb-2 text-2xl font-bold">About this Place</h2>
      <p>{resortData.description}</p>
    </>
  );
}

export default About;
