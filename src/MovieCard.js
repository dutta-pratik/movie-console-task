import React from "react";

const MovieSection = (movies) => {
    const {movie, handleShowDetails} = movies;
    
    const  handleClick=()=> {
        handleShowDetails(movie);
    }
    return(
        <span>
            {console.log(movie)}

            {movie.title}
            <div>
                <button className="go" onClick={handleClick}>Check Details</button>
            </div>
            
        </span>
    );
}

export default MovieSection;