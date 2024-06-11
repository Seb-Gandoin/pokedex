
const PokemonCard = ({pokemon}) => {


  return <figure className="card">
     {pokemon.imgSrc 
     ? ( <img className="card-img" src={pokemon.imgSrc} alt={pokemon.name} /> ) 
     : ( <p>???</p> )
     } 
      <figcaption> {pokemon.name} </figcaption>
  </figure>
}


export default PokemonCard;