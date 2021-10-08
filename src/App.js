import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ScrollToTop from './components/ScrollToTop.jsx';
import Buttons from './components/NewUIThemeButton.jsx';
import Header from './components/Header.jsx';
import CharactersList from './components/CharactersList.jsx';

import './styles/components/App.scss';

const URL = 'https://rickandmortyapi.com/api/character';
let number = 1;

function App() {
  const [posts, setPosts] = useState([]);
  const [pagination, setPagination] = useState(false);
  const [counter, setCounter] = useState(number);

  useEffect(() => {
    axios
      .get(URL)
      .then(res => {
        setPosts(res.data.results)
      })
      .catch(err => {
        console.error(err)
      })
  }, []);

  const filteredMale = posts.filter(character => character.gender === 'Male');
  const filteredFemale = posts.filter(character => character.gender === 'Female');
  const filteredHuman = posts.filter(character => character.species === 'Human');
  const filteredAlien = posts.filter(character => character.species === 'Alien');

  const filterCharactersHandler = event => {

    if (event.target.value === 'Male') {
      setPosts(filteredMale)
    } else if (event.target.value === 'Female') {
      setPosts(filteredFemale)
    } else if (event.target.value === 'Human') {
      setPosts(filteredHuman)
    } else if (event.target.value === 'Alien') {
      setPosts(filteredAlien)
    } else {
      setPosts(posts)
    }
  }

  const nextButtonHandler = () => {
    number = number + 1;
    setCounter(counter + 1);
    axios
      .get(URL + `/?page=${number}`)
      .then(res => {
        setPosts(res.data.results)
      });
    setPagination(true);
  };

  const backButtonHandler = () => {
    number = number - 1;
    setCounter(counter - 1);
    axios
      .get(URL + `/?page=${number}`)
      .then(res => {
        setPosts(res.data.results)
      });
    if (number === 1) {
      setPagination(false);
    };
  };

  return (
    <>
      <Header />

      <select className="filter__select" onChange={filterCharactersHandler}>
        <option value="Full-List" defaultValue>Filter Current Characters</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Human">Human</option>
        <option value="Alien">Alien</option>
      </select>

      <CharactersList posts={posts} />

      <div className="buttons">
        <Buttons pagination={pagination} posts={posts} clickBack={backButtonHandler} clickNext={nextButtonHandler} pageNumber={counter} />
      </div>
      <ScrollToTop />
    </>
  );
}

export default App;