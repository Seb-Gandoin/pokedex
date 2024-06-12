import React from "react";

const NavBar = ({ pokemonList, handlePrevious, handleNext, setPokemonIndex }) => {
  return (
    <div className="navigation-buttons">
      {pokemonList.map((pokemon, index) => (
        <button key={index} onClick={() => setPokemonIndex(index)}>
          {pokemon.name}
        </button>
      ))}
    </div>
  );
};

export default NavBar;