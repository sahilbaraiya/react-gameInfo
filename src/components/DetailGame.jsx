import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetailGame() {
  const { id } = useParams();
  const [game, setGame] = useState({});
  const [screenshots,setScreenshots] = useState([]);
  const [readmore,setReadmore] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
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
        if(result){
          setGame(result);
          setScreenshots(result.screenshots)
        }
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [id]);

  return (
    <div className=" mt-2 space-y-4" >
      <div className="flex justify-center items-center">
      <img
        src={game?.thumbnail}
        alt="game image"
        className="object-contain rounded-md mx-8 w-1/2   "
      />
      </div>
      <h2 className="marker:text-sky-500 text-2xl font-bold text-center text-sky-300 md:text-5xl lg:text-6xl ">{game?.title}</h2>
      <p className="text-md font-normal text-start text-sky-200 sm:text-xl md:text-3xl   "> Genre: {game?.genre}</p>
      <p className="text-sm font-normal text-start text-sky-200 md:text-3xl " >release date: {game?.release_date}</p>
      <p className="text-sm font-normal text-start text-sky-200 mb-3 md:text-3xl " >publisher: {game?.publisher}</p>
      <p className={`text-xs tracking-tight font-normal sm:text-2xl lg:text-2xl xl:text-4xl text-sky-200 ${readmore ? 'line-clamp-3' : ''} `}>
      {game?.description} 
      </p>
      <button className="text-sky-200 font-medium mb-2  sm:text-2xl lg:text-3xl xl:text-4xl " onClick={()=>{setReadmore(!readmore)}}>{readmore ? ('readmore...'):('read less... ')}</button>
      <div className="">
      <span className="sm:text-2xl lg:text-3xl xl:text-4xl">screenshots:</span>:{
        screenshots?.map((item,index)=>(<img  key={index} src={item?.image} alt="game image"
        className="object-contain rounded-sm my-2 p-2 " />))

      }
      </div>
      
    
    </div>
  );
}

export default DetailGame;

