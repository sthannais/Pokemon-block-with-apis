import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/PokemonWithoutEvolution.css";

function UnevolvedPokemon() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://pokeapi.co/api/v2/pokemon-species?evolves_from_species=null&limit=1000"
      )
      .then((response) => {
        setPokemonList(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="container-sm">
        <h1 className="mt-3 text-center text-dark mx-5 px-5 title">
          Pokemon That Don't Evolve
        </h1>
        <div className="container mt-4">
          <div className="row">
            <div className="card-deck overflow-auto">
              <div className="d-flex flex-row flex-nowrap">
                {pokemonList.map((pokemon) => (
                  <div className="card mx-3 col-md-4 cardPoke">
                    <img
                      src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/921.png"
                      className="card-img-top imgPoke"
                      alt="img"
                    />
                    <div className="card-title d-flex justify-content-around">
                      <h4 className="mt-2 me-2 text-primary name">
                        {pokemon.name}
                      </h4>
                      <button className="btn btn-outline-warning icon">
                        <i className="fa-regular fa-heart"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UnevolvedPokemon;
