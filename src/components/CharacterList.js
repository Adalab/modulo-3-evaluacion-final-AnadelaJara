import CharacterCard from "./CharacterCard";
import CharacterDoesNotExist from "./CharacterDoesNotExist";

const CharacterList = (props) => {
  const characterElements = props.characters
    .map((character, index) => {
      return <li key={index}>
        <CharacterCard character={character} />
      </li>
    })
  if (props.characters.length === 0) {
    return <CharacterDoesNotExist />;
  } else {
    return (<section className="character_container">
      <ul className="character_list">
        {characterElements}
      </ul>
    </section>
    )
  }
};

export default CharacterList;







