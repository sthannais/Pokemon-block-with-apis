import React from "react";
import UnevolvedPokemon from "./components/UnevolvedPokemon";
import UnevolvedPokeWeight from "./components/UnevolvedPokeWeight";
import Navbar from "./components/Nabvar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <UnevolvedPokemon />
      <UnevolvedPokeWeight />
      <Footer />
    </div>
  );
}

export default App;
