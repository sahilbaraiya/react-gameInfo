import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

function AllGames() {
  const [data, setData] = useState([]);
  const [sort, setSort] = useState("alphabetical");
  const [platform, setPlatform] = useState("pc");
  const [category, setCategory] = useState("sports");

  //for games list
  
    const getData = async () => {
      const url =
        "https://free-to-play-games-database.p.rapidapi.com/api/games";
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key":import.meta.env.RAPID_API_KEY ,
          "x-rapidapi-host": import.meta.env.HOST_KEY ,
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        if (result) {
          setData(result);
        }
        document.documentElement.scrollTop = 0;
      } catch (error) {
        console.error(error);
      }
    }

  
  //for all sorting
  useEffect(() => {
    const getAll = async () => {
      const url =
        `https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${platform}&category=${category}&sort-by=${sort}`;
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "2cda0ec044mshd90b8448e1c0f95p10c195jsnbfc95ee41bf8",
          "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log('all sort resluts ',result);
        if(result){
          setData(result);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getAll();
  }, [sort, platform, category]);

  console.log("sort value is ", sort);
  console.log("paltform value is ", platform);
  console.log("category value is ", category);
  

  return (
    <>

    <div className="sm:flex justify-center items-center md:space-x-14">

    
      {/* sort  */}
      <div className="space-x-3 ml-3">
        <label>Sort By:</label>{" "}
        <select
          className="bg-slate-800 my-4 px-2 py-2 rounded-md focus:outline-none focus:ring focus:ring-violet-300 "
          onClick={(e) => {
            setSort(e.target.value);
          }}
        >
          <option value="alphabetical">Alphabetical</option>
          <option value="relevance">Relevance</option>
          <option value="popularity">Popularity</option>
          <option value="release-date">release date</option>
        </select>
      </div>

      {/* platform  */}
      <div className="space-x-3 ml-3">
        <label>Platform:</label>{" "}
        <select
          className="bg-slate-800 my-4 px-2 py-2 rounded-md focus:outline-none focus:ring focus:ring-violet-300  "
          onClick={(e) => {
            setPlatform(e.target.value);
          }}
        >
          <option value="pc">PC</option>
          <option value="browser">Web Browser</option>
          <option value="all">All</option>
        </select>
      </div>

      {/* category */}
      <div className="space-x-3 ml-3">
        <label>Category:</label>{" "}
        <select
          className="bg-slate-800 my-4 px-2 py-2 rounded-md focus:outline-none focus:ring focus:ring-violet-300  "
          onClick={(e) => {
            setCategory(e.target.value);
          }}
        >
          <option value="sports">Sports</option>
          <option value="shooter">Shooter</option>
          <option value="anime">Anime</option>
          <option value="action">Action</option>
          <option value="fantacy">Fantacy</option>
          <option value="social">Social</option>
          <option value="racing">Racing</option>
        </select>
      </div>

      </div>

      <div className=" font-normal text-xl ml-3 ">Total <span className="text-slate-900 font-bold text-xl">{data.length}</span> Games Found...</div>

      <div className="grid md:grid-cols-3 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {data && data.map((item) => (
          <Link to={`/detail-game/:${item.id}`} key={item.id}>
            <Card item={item} />
          </Link>
        ))}
      </div>
      <div className="p-3 flex justify-center items-center text-blue-400 " >
      <button onClick={getData}> All The Games...</button></div>
    </>
  );
}

export default AllGames;
