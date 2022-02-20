const callToApi = (filterHouse) => {
  return fetch(`https://hp-api.herokuapp.com/api/characters/house/${filterHouse}`)
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.map((character, index) => {
        return {
          id: index,
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

// `${character.name} ${character.actor}${character.wand.length}`