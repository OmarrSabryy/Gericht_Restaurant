import React from "react";
import classes from "./intro.module.css";
import { intro } from "../../exports";
import { useRef, useState } from "react";
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const playHandler = () => {
    setPlayVideo((prevState) => !prevState);
  };
  const vidRef = useRef();
  if (playVideo) vidRef.current?.play();
  else vidRef.current?.pause();
  return (
    <div className={classes["gericht__intro"]}>
      <video
        src={intro}
        ref={vidRef}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
      <div
        className={classes["gericht__intro-overlay"]}
        style={{
          background: `${playVideo ? "rgb(0, 0, 0, 0)" : "rgb(0, 0, 0, 0.5)"}`,
        }}
      >
        <div
          onClick={playHandler}
          className={classes["gericht__intro-overlay_controls"]}
        >
          {playVideo ? (
            <BsFillPauseFill color="#fff" size={25} />
          ) : (
            <BsFillPlayFill color="#fff" size={25} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
