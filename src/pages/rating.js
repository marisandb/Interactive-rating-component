import React from "react";
import icon from "../images/icon-star.svg"

function Rating() {
  const handleClick = e => {
    e.currentTarget.style.backgroundColor = `var(--Primary)`;
    e.currentTarget.style.color = 'white';
  };
  const handleSubmit = e => {
    e.currentTarget.style.backgroundColor = `var(--White)`;
    e.currentTarget.style.color = `var(--Primary)`;
  };

  return (
    <section id="rating" className="container">
        <img src={icon} className="icon" alt="star"/> 
        <h1>How did we do?</h1>
        <p> Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
        <div className="rating-buttons">
        <button onClick={handleClick}>1</button>
        <button onClick={handleClick}>2</button>
        <button onClick={handleClick}>3</button>
        <button onClick={handleClick}>4</button>
        <button onClick={handleClick}>5</button>
        </div>


        <button className="submit-btn" onClick={handleSubmit}>Submit</button>
    </section>
  );
}

export default Rating; 