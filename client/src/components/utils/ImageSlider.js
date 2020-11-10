import React from "react";
import { Carousel } from "antd";

function ImageSlider(props) {
  return (
    <div>
      <Carousel>
        {props.images.map((image, index) => (
          <div key={index}>
            <img
              style={{ width: "100%" }}
              src={`https://calm-eyrie-12447.herokuapp.com/${image}`}
              alt="productImage"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default ImageSlider;
