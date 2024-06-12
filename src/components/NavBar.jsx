import React from "react";

const NavBar = ({ pokemonIndex, handlePrevious, handleNext, pokemonListLength }) => {
  return (
    <div className="navigation-buttons">
      {pokemonIndex > 0 && <button onClick={handlePrevious}>Précédent</button>}
      {pokemonIndex < pokemonListLength - 1 && <button onClick={handleNext}>Suivant</button>}
    </div>
  );
};

export default NavBar;