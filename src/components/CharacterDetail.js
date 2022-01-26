import { Link } from "react-router-dom";
// import Shield from '../images/hogwards-shield.png'
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
    <section >
      <div className="container__link">
        <Link className="link__back" to="/">Volver</Link>
      </div>
      <div className="container__details">

        <img className="container__details--img" src={props.character.image !== "" ? props.character.image : 'https://1000marcas.net/wp-content/uploads/2020/02/Logo-Hogwarts.png'}
          alt={`Foto de ${props.character.name}`}
          title={`Foto de ${props.character.name}`}
        />
        <div className="container__details--text">
          <h2>{props.character.name}</h2>
          <p className="container__details--text__status">{getStatus()}</p>
          <p className="container__details--text__status">{getSpecies()}</p>
          <p className="container__details--text__status">{getGender()}</p>
          <p className="container__details--text__status" > {props.character.house}</p >
          <p className="container__details--text__status" > {props.character.alternate_names}</p >
        </div >
      </div >
    </section >
  )
}

export default CharacterDetail;