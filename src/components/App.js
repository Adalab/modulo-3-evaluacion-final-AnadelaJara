import "../styles/App.scss";
import callToApi from '../services/api';
import { useEffect, useState } from 'react';
import CharacterList from "./CharacterList";
import Filters from "./Filters";

// import { Route, Link } from 'react-router-dom';



function App() {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [filterHouse, setFilterHouse] = useState('gryffindor');

  useEffect(() => {
    callToApi(filterHouse).then((charactersData) => {
      setCharacters(charactersData);
    });
    console.log(filterHouse);
  }, [filterHouse]);

  const handleFilter = (data) => {
    if (data.key === 'name') {
      setFilterName(data.value);
    } else if (data.key === 'house') {
      setFilterHouse(data.value);
    }
  }

  const filteredCharacters = characters
    .filter((character) => {
      return character.name.toLowerCase().includes(filterName.toLowerCase());
    })
    .filter((character) => {
      return filterHouse === 'gryffindor' ? true : character.house === filterHouse;
    });

  return (
    <div>
      <h1>Harry Potter</h1>
      <main>
        <Filters handleFilter={handleFilter} filterName={filterName}
          filterHouse={filterHouse}
        />
        <CharacterList characters={filteredCharacters} />
      </main>
    </div>
  );
}

export default App;

