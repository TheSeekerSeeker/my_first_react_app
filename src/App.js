import {useEffect} from "react";
import MovieCard from "./MovieCard";
import searchIcon from './search.svg';
import './App.css';
const API_URL = "http://www.omdbapi.com?apikey=9926231b";
const movie1 = {
        "Title": "Hollywood's Master Storytellers: Spiderman Live",
        "Year": "2006",
        "imdbID": "tt2158533",
        "Type": "movie",
        "Poster": "N/A"
}
const App = () =>{
  const searchmovies = async(title)=>{
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();
    console.log(data.Search);
  }
  useEffect(()=>{
  searchmovies('spiderman');
  }, []);
  return(
 <div className = 'app'>
   <h1>MovieLand</h1>
   <div className="search">
     <input
     placeholder = 'search for movies'
     value='Superman'
     onChange={()=>{}}
     />
     <img
     src={searchIcon}
     alt='search'
     onClick={()=>{}}
     />
   </div>
   <div className="container">
   <MovieCard movie1={movie1} />
   </div>
 </div>

  );
}
export default App;