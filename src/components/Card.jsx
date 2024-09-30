import React from "react";
import { Link } from "react-router-dom";

function Card({ item }) {
  return (
    <>
      <div className="min-h-full rounded-xl border-4 border-sky-300 m-3  p-2 hover:bg-slate-700 ">
        <div className="flex justify-center items-center">
          <img
            src={item?.thumbnail}
            className="object-contain rounded-md w-full"
            alt="game image"
          />
        </div>
        <h1 className="text-2xl font-bold text-center text-sky-300 ">
          {item?.title}{" "}
        </h1>

        <p className="text-md font-medium text-center line-clamp-3">
          {item?.short_description}|{" "}
          <span className="text-sky-500">{item?.genre}</span>
        </p>
      </div>
    </>
  );
}

export default Card;

//to={`/detail-game/:${item.id}`}
