import "./App.css";
import Weather from "./Weather.js";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Weather defaultCity={"London"} />
      <footer>
        This project was coded by Benzi Holler and is{" "}
        <a
          target="_blank"
          href="https://github.com/benzinow/react-weather-application"
        >
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a target="_blank" href="https://grand-taiyaki-2e97f9.netlify.app/">
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
