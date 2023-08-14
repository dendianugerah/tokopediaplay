import React from "react";
import { Link } from "react-router-dom";

function truncateText(text, maxLength) {
  if (text.length <= maxLength) {
    return text;
  } else {
    return text.substring(0, maxLength) + "..";
  }
}

function VideoCard(props) {
  return (
    <div className="videoCard relative overflow-hidden">
      <Link to={`/video/${props.id}`} className="videoCard__link">
        <div className="videoCard__detail relative">
          <img
            className="rounded-lg max-w-[350px]"
            src={props.thumbnail}
            alt={props.title}
          />
          <h2 className="font-bold font-mono text-[12px] absolute rounded-b-lg bottom-0 left-0 w-[350px] bg-black bg-opacity-50 text-white p-2">
            {truncateText(props.title, 48)}
          </h2>
        </div>
      </Link>
    </div>
  );
}

export default VideoCard;
