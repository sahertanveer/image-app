import React from "react";

const ImageStack = ({ image }) => {
  return (
    <div className="image-collection">
      {image === "simple" ? (
        <div
          className="single-image"
          style={{ opacity: image === "simple" ? 1 : 0 }}
        >
          <img
            src="https://media.istockphoto.com/vectors/soap-bubbles-black-vector-id467946228?k=20&m=467946228&s=612x612&w=0&h=DfhpT_EDImUAsF7KX43EGApCRKtF6w3LFAdMBz-t5YQ="
            alt="simple bubble"
          />
        </div>
      ) : image === "colorful" ? (
        <div
          className="single-image"
          style={{ opacity: image === "colorful" ? 1 : 0 }}
        >
          <img
            src="https://ak7.picdn.net/shutterstock/videos/21876967/thumb/11.jpg"
            alt="colorful bubbes"
          />
        </div>
      ) : image === "white" ? (
        <div
          className="single-image"
          style={{ opacity: image === "white" ? 1 : 0 }}
        >
          <img
            src="https://wallpaperaccess.com/full/912904.jpg"
            alt="white bubble"
          />
        </div>
      ) : (
        <div
          className="single-image"
          style={{ opacity: image === "default" ? 1 : 0 }}
        >
          <img
            src="https://st3.depositphotos.com/1113353/18028/i/450/depositphotos_180284264-stock-photo-bubbles-on-black-background.jpg"
            alt="default"
          />
        </div>
      )}
    </div>
  );
};

export default ImageStack;
