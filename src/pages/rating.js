import React from "react";
import icon from "../images/icon-star.svg"

function Rating() {
  return (
    <section id="rating">
        <img src={icon} alt="star"/> 
        <h1>How did we do?</h1>

        <p> Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
        <div className="rating-buttons">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        </div>


        <button className="submit-btn">Submit</button>
    </section>
  );
}

export default Rating; 