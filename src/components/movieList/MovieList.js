import React,{useState,useEffect} from "react";
import Cards from "../card/Card.js"
import "./MovieList.css"
import { useParams } from "react-router-dom";

const MovieList=()=>{
    const [movieData,setMovieData]=useState([])
    const {type}=useParams()

    const getData=()=>{
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=0f100819b3346e4ac29ae6508ec6e8d2&language=en-US`)
        .then(res=> res.json())
        .then(data=> setMovieData(data.results))
    }
    useEffect(()=>{
       getData() 
    },[])

    useEffect(()=>{
        getData()
    },[type])



    return(
        <div className="movieList">
            <h2 className="list-title">{(type ? type :"POPULAR").toUpperCase()}</h2>
            <div className="list-of-cards">
                {
                    movieData?.map(movie=>(
                        < Cards movie={movie} />
                    ))
                }
            </div>
        </div>
    )
}

export default MovieList