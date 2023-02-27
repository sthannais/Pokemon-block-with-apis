import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/UnevolvedPokeWeight.css";

const UnevolvedPokeWeight = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon/?limit=500"
        );
        const pokemonList = response.data.results;
        const promises = pokemonList.map(async (pokemon) => {
          const pokemonResponse = await axios.get(pokemon.url);
          return pokemonResponse.data;
        });
        const pokemonDataList = await Promise.all(promises);
        const noEvoPokemonDataList = pokemonDataList.filter(
          (pokemonData) =>
            !pokemonData.hasOwnProperty("evolves_from_species") &&
            pokemonData.weight < 10
        );
        setPokemonData(noEvoPokemonDataList);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPokemonData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5 paddingPoke">
      <h1 className="mt-3 text-dark text-center mx-5 px-5 title">
        Unevolved Pokemon Weight
      </h1>
      <div className="container-sm mt-4">
        <div className="row">
          <div className="card-deck overflow-auto">
            <div className="d-flex flex-row flex-nowrap">
              {pokemonData.map((pokemon) => (
                <div className="card mx-3 col-md-4 cardPoke">
                  <div key={pokemon.id}>
                    <img
                      className="card-img-top imgPoke"
                      src={pokemon.sprites.front_default}
                      alt={pokemon.name}
                    />
                    <div className="card-body me-3 d-flex justify-content-around">
                      <h4 className="card-title namePoke">{pokemon.name}</h4>
                      <h4 className="card-text namePoke">
                        Weight: {pokemon.weight}
                      </h4>
                      <button className="btn btn-outline-warning icon">
                        <i className="fa-regular fa-heart"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnevolvedPokeWeight;
