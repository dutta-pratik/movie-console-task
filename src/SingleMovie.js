import React from 'react';
import del from "./delete.svg";

const SingleMovie=(props)=>{
    const {movie,handleSwitchDetails}=props;
    
    console.log('',movie);

    const handleDelteMovie=()=>{
        let url = `http://localhost:8000/api/v1/movie/delete/${movie._id}`;
        // const url = "https://api.themoviedb.org/3/discover/movie?api_key=310cd168feeee489c730aeae47849e33&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=12"
        fetch(url,{
             method:'delete'
         }).then(response=>response.json());
         handleSwitchDetails();
    }

    return(
        <div>
            <div className="single-details">
                
                <h2 className="title">{movie[0].title}</h2>
                
                <p><h4>Details</h4></p>
                <hr></hr>
                <p>
                    <span> Director</span> &nbsp;&nbsp;&nbsp;&nbsp;
                    <span>Year</span>
                </p>
                <p>
                    <span>{movie[0].director} </span> &nbsp;&nbsp;&nbsp;&nbsp;
                    <span>{movie[0].year} </span>
                </p>
                <p>Description</p>
                <button onClick={handleDelteMovie}  className="delete-btn" ><img src={del} className="delete-img"></img></button>
            </div>
       </div>
    );
   
}

export default SingleMovie;