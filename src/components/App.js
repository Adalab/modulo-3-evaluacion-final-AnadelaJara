import "../styles/App.scss";
// import { Route, Link } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import callToApi from '../services/api';

function App() {
  return (
    <div>
      <h1>Harry Potter</h1>
      <main>
        <section>
          <form>
            <input type="text" />
            <select>
              <option value="gryffindor">Gryffindor</option>
              <option value="hufflepuff">Hufflepuff</option>
              <option value="ravenclaw">Ravenclaw</option>
              <option value="slytherin">Slytherin</option>
            </select>
          </form>
        </section>
        <section>
          <ul>
            <li>
              <img alt="imagen" />
              <h2>Nombre</h2>
              <h2>Especie</h2>
            </li>
          </ul>
        </section>


      </main>
    </div>
  );
}

export default App;

