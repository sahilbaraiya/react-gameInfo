import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="">
      {/* //image */}
      <div className="flex justify-center items-center">
        <img
          src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=1957&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="game image"
          className="w-full mx-2 object-cover opacity-25 contrast-200 bg-gradient-to-r from-slate-800 to-700-400 animate-pulse "
        />
      </div>

      <div className="bg-gradient-to-r from-slate-800 to-700-400 animate-pulse ">
        <h2 className="text-3xl sm:text-5xl text-center font-semibold text-black p-10 ">
          Discover the Best Free-To-Play Games with Ease!
        </h2>
      </div>

      <div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-black mx-4 my-2 ">
          Key Features
        </h2>
        <ul className="text-xl sm:text-2xl font-semibold text-black mx-4 my-2 list-disc px-4">
          <li>100% Free forever</li>
          <li>Access to over 400 free-to-play games.</li>
          <li>
            Detailed metadata: genres, developers, publishers, release dates,
            official websites and more.
          </li>
          <li>Unrestricted access to data</li>
        </ul>
      </div>

      {/* button link  */}
      <div
        className="flex justify-center items-center
       my-9"
      >
        <Link
          to={"/all-games"}
          className=" bg-gradient-to-r from-sky-500 to-indigo-500 p-4 rounded-lg 
        
        hover:shadow-xl "
        >
          Access All Gaming Informatiion
        </Link>
      </div>
    </div>
  );
}

export default Home;
