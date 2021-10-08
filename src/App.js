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
  const [dynamicURL, setDynamicURL] = useState(URL);

  useEffect(() => {
    axios
      .get(dynamicURL)
      .then(res => {
        setPosts(res.data.results)
      })
      .catch(err => {
        console.error(err)
      })
  }, [dynamicURL]);

  const filterCharactersHandler = event => {
    const { value } = event.target;

    if (value === 'Male') {
      setDynamicURL(`${URL}/?gender=male`);
    } else if (value === 'Female') {
      setDynamicURL(`${URL}/?gender=female`)
    } else if (value === 'Human') {
      setDynamicURL(`${URL}/?species=human`)
    } else if (value === 'Alien') {
      setDynamicURL(`${URL}/?species=alien`)
    } else {
      setDynamicURL(URL);
    }
  }

  const nextButtonHandler = () => {
    number = number + 1;
    setCounter(counter + 1);
    axios
      .get(URL + `/? page = ${number} `)
      .then(res => {
        setPosts(res.data.results)
      });
    setPagination(true);
  };

  const backButtonHandler = () => {
    number = number - 1;
    setCounter(counter - 1);
    axios
      .get(URL + `/? page = ${number} `)
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
      <label className="filter">Filter current characters</label>
      <select className="filter__select" onChange={filterCharactersHandler}>
        <option value="full-list" defaultValue>all</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Human">Human</option>
        <option value="Alien">Alien</option>
      </select>

      <CharactersList posts={posts} />

      <div className="button-container">
        <Buttons pagination={pagination} posts={posts} clickBack={backButtonHandler} clickNext={nextButtonHandler} pageNumber={counter} />
      </div>
      <ScrollToTop />
    </>
  );
}

export default App;