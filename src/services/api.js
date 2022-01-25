const callToApi = (filterHouse) => {
  return fetch(`http://hp-api.herokuapp.com/api/characters/house/${filterHouse}`)
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.map((character) => {
        return {
          id: `${character.name} ${character.actor}`,
          image: character.image,
          name: character.name,
          status: character.alive,
          species: character.species,
          gender: character.gender,
          house: character.house,
          alternateNames: character.alternate_names
        }
      });
      return cleanData;
    })
}

export default callToApi;