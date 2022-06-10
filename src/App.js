import logo from './logo.svg';
import './App.css';
import Rating from "./pages/rating"
import RatingThankYou from "./pages/rating-thank-you"

function App() {
  return (
    <div className="App container">
     <Rating />
     {/* <RatingThankYou /> */}
     <div class="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="https://github.com/marisandb">Marisa</a>.
    </div>
    </div>
  );
}

export default App;
