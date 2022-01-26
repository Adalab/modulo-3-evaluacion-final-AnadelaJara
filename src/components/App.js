import "../styles/App.scss";
import "../styles/core/reset.scss";
import "../styles/core/variables.scss";
import callToApi from '../services/api';
import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import CharacterDetail from "./CharacterDetail";
import Footer from "./Footer";
import Header from "./Header";



function App() {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [filterHouse, setFilterHouse] = useState('gryffindor');

  useEffect(() => {
    callToApi(filterHouse).then((charactersData) => {
      setCharacters(charactersData);
    });
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
    });

  const renderCharacterDetail = (props) => {
    const routeId = parseInt(props.match.params.id);

    const findCharacter = characters.find((character) => character.id === routeId);

    return <CharacterDetail character={findCharacter} />;

  }


  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact>
          <main className="main">
            <Filters handleFilter={handleFilter} filterName={filterName}
              filterHouse={filterHouse}
            />
            <CharacterList characters={filteredCharacters} />
          </main>
        </Route>
        <Route path="/character/:id" render={renderCharacterDetail}>

        </Route>
      </Switch>
      <Footer />
    </div >
  );
}

export default App;

