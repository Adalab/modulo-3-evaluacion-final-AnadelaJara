import { Link } from "react-router-dom";
import Shield from '../images/Logo-Hogwarts.png'
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
    <Link to={`/character/${props.character.id}`} className="character__list">
      <img className="imgCard" src={props.character.image !== "" ? props.character.image : Shield}
        alt={`Foto de ${props.character.name}`}
        title={`Foto de ${props.character.name}`}
      />
      <div className="containerDescription">
        <h3 className="containerDescription__name">{props.character.name}</h3>
        <p className="containerDescription__specie">{getSpecies()}</p>
      </div>
    </Link >
  )
}
export default CharacterCard;