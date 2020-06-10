import React from "react";
import img from "./avenger.jpg"

const Caraousel = () => {
    return(
        <div>
            <span>
                {<img src={img} className="caraousel"></img>}
               
            </span>
        </div>
    );
}

export default Caraousel;