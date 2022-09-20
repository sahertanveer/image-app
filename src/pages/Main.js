import React from "react";
import ImageStack from "../components/ImageStack";

const Main = ({ image }) => {
  return (
    <div className="container bg-black pt-5" style={{ height: "92vh" }}>
      <ImageStack image={image} />
    </div>
  );
};

export default Main;
