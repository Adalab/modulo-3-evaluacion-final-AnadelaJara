import { Link } from "react-router-dom";
const CharacterDetail = (props) => {

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

  const getGender = () => {
    return props.character.gender === "female" ? "Mujer" : " Hombre";
  };

  const getStatus = () => {
    // return props.character.status ? "Vivo" : " Muerto";
    if (props.character.status && props.character.gender === 'female') {
      return 'Viva';
    } else if (props.character.status && props.character.gender === 'male') {
      return 'Vivo';
    } else if (!props.character.status && props.character.gender === 'female') {
      return 'Muerta';
    } else if (!props.character.status && props.character.gender === 'male') {
      return 'Muerto';
    }
  };

  return (
    <section>
      <Link to="/">Volver a la página principal</Link>
      <img src={props.character.image === '' ? `https://via.placeholder.com/210x295/22222/fffff/?text=${props.character.name}` : props.character.image} alt={`Foto de ${props.character.name}`} title={`Foto de ${props.character.name}`} />
      <h2>{props.character.name}</h2>
      <p>{getStatus()}</p>
      <p>{getSpecies()}</p>
      <p>{getGender()}</p>
      <p>{props.house}</p>
      <p>{props.character.alternate_names}</p>
    </section>
  )
}

export default CharacterDetail;