import React from "react";
import '../../fonts/fonts.css'
import { useSelector } from "react-redux";

function About() {
  const resortData = useSelector((state)=>state.verifyResort.resortData)
  return (
    <>
      <h2 className="mb-2 text-3xl font-bold tracking-wide text-gray-300 font-oswald ">ABOUT THIS PLACE</h2>
      <p className="text-gray-500 font-roboto">{resortData.description}</p>
    </>
  );
}

export default About;
