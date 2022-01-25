const CharacterCard = (props) => {
  const getSpecies = () => {
    if (props.character.species === "human") {
      return "Humano";
    } else if (props.character.species === "half-giant") {
      return "Medio-gigante";
    } else if (props.character.species === "werewolf") {
      return "Hombre-lobo";
    } else if (props.character.species === "goblin") {
      return "Duende";
    } else if (props.character.species === "ghost") {
      return "Fantasma";
    } else if (props.character.species === "house-elf") {
      return "Elfo doméstico";
    } else if (props.character.species === "poltergeist") {
      return "Poltergeist";
    } else if (props.character.species === "giant") {
      return "Gigante";
    } else if (props.character.species === "centaur") {
      return "Centauro";
    } else if (props.character.species === "half-human") {
      return "Medio-humano";
    } else if (props.character.species === "owl") {
      return "Búho";
    }
  };
  return (
    <>
      <img src={props.character.image === '' ? `https://via.placeholder.com/210x295/22222/fffff/?text=${props.character.name}` : props.character.image} alt={`Foto de ${props.character.name}`} title={`Foto de ${props.character.name}`} />
      <h2>{props.character.name}</h2>
      <h2>{getSpecies()}</h2>
    </>
  )
}
export default CharacterCard;