import "./App.css";
import Weather from "./Weather.js";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Weather defaultCity={"Tucson"} />
      <footer>
        This project was coded by Benzi Holler and is{" "}
        <a
          target="_blank"
          href="https://github.com/benzinow/react-weather-application"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a
          target="_blank"
          href="https://effulgent-paprenjak-e75b2a.netlify.app/"
          rel="noreferrer"
        >
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
