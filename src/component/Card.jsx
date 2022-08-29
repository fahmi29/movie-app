import React from 'react';
import { Link } from 'react-router-dom';
function Card(props){
    console.log(props);
    const image = "https://image.tmdb.org/t/p/w500/";
  return (
    <>
            <div className="flex flex-wrap">
        {props.movie.map((film, index) => 
            <div className="pl-6 pt-8">
                <div className="w-60 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
                        <img className=" object-cover rounded-xl  object-cover rounded-xl" src={image+film.poster_path} />
                    <div className="p-2">
                        <h2 className="font-bold text-lg mb-2 ">{film.original_title}</h2>
                        {/* <p className="text-sm text-gray-600">Simple Yet Beautiful Card Design with TaiwlindCss. Subscribe to our Youtube channel for more ...</p> */}
                    </div>
                    <div className="m-2 pb-6">
                        <Link to={{
                            pathname:`/detail/${film.id}`,
                            state:{
                                id: film.id,
                            },
                        }}>
                            <button className="">See Detail</button>
                        </Link>
                    </div>
                </div>
            </div>
        )}
        </div>
    </>
  )
}

export default Card;