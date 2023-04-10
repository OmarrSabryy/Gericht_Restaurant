import React, { useRef } from "react";
import classes from "./gallery.module.css";
import { images } from "../../exports";
import { SubHeader } from "../../components";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
const Gallery = () => {
  const gallery = [
    images.gallery01,
    images.gallery02,
    images.gallery03,
    images.gallery04,
  ];
  const scrollRef = useRef(null);
  const scroll = (direction) => {
    if (direction === "left") {
      scrollRef.current.scrollLeft -= 300;
    } else {
      scrollRef.current.scrollLeft += 300;
    }
  };
  return (
    <div className={`${classes["gericht__gallery"]} flex__center`}>
      <div className={classes["gericht__gallery-heading"]}>
        <SubHeader title="Instagram" />
        <h1>Photo Gallery</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <button>View More</button>
      </div>
      <div className={classes["gericht__gallery-images"]}>
        <div
          className={classes["gericht__gallery-images_container"]}
          ref={scrollRef}
        >
          {gallery.map((image, index) => (
            <div
              key={`${image + index + 1}`}
              className={classes["gericht__gallery-images_container-card"]}
            >
              <img src={image} alt="gallery" />
              <BsInstagram size={20} />
            </div>
          ))}
        </div>
        <div className={classes["gericht__gallery-images_controls"]}>
          <BsArrowLeftShort size={25} onClick={() => scroll("left")} />
          <BsArrowRightShort size={25} onClick={() => scroll("right")} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
