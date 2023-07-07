import React from "react";
import ResortCard from "../resort/ResortCard";


function Home({category}) {
  return (
    <div className="container mx-auto">
      <ResortCard category={category}/>
    </div>
  );
}

export default Home;
