import React from "react";
import "./App.css";
import Row from "./Row.js";
import Banner from "./Banner.js";
import requests from "./requests";
import Nav from "./Nav.js";

function App() {
  return (
    <div className="app">
      {/* <Nav /> */}
      <Nav />

      <Banner />

      <Row
        className="row"
        title="Netflix Orginals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.tetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
