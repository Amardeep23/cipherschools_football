import React, { useState } from "react";
import "./ListItems.scss";
import list_img from "../../assets/img/list_img.jpg";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import trailer_dog from "../../assets/video/dog.mp4";

export const ListItems = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const trailer = trailer_dog;
  return (
    <div
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      className="listitem"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={list_img} alt="list_img" />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop></video>
          <div className="itemInfo">
            <div className="icons">
              <PlayArrowIcon className="icon"></PlayArrowIcon>
              <AddIcon className="icon"></AddIcon>
              <ThumbUpOffAltIcon className="icon"></ThumbUpOffAltIcon>
              <ThumbDownOffAltIcon className="icon"></ThumbDownOffAltIcon>
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">16+</span>
              <span>1999</span>
            </div>
            <div className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              consequatur deleniti enim sit eveniet totam
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
};
