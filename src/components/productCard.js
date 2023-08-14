import React from "react";
import { Link } from "react-router-dom";

function ProductCard(props) {
  return (
    <div className="productCard relative overflow-hidden py-[10px]">
      <Link to={props.link} className="productCard__link">
        <div className="productCard__detail relative">
          <img
            className="rounded-lg h-[170px] w-[200px]"
            src={props.imageUrl}
            alt={props.title}
          />
          <h2 className="font-bold font-mono text-[12px] absolute rounded-b-lg bottom-0 left-0 w-[350px] bg-black bg-opacity-50 text-white p-2">
            {props.title}
            <p>{props.price}</p>
          </h2>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
