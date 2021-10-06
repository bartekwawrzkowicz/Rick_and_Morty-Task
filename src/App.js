import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ScrollToTop from './components/ScrollToTop';

import Header from './components/Header';
import CharactersList from './components/CharactersList';

import './styles/components/App.scss';

const URL = 'https://rickandmortyapi.com/api/character';
const genderFemaleURL = 'https://rickandmortyapi.com/api/character/?gender=female';
const buttonActiveText = 'Female Characters filter';
const buttonNonActiveText = 'Back to starting list';
let number = 1;

function App() {
  const [posts, setPosts] = useState([]);
  const [isActive, setIsActive] = useState(true);
  const [pagination, setPagination] = useState(false);

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

  const filterFemaleCharacters = () => {
    setIsActive(!isActive)

    if (isActive) {
      axios
        .get(genderFemaleURL)
        .then(res => {
          setPosts(res.data.results)
        })
    } else {
      axios
        .get(URL)
        .then(res => {
          setPosts(res.data.results)
        })
    }
  };

  const nextButtonHandler = () => {
    ++number
    axios
      .get(URL + `/?page=${number}`)
      .then(res => {
        setPosts(res.data.results)
      })

    setPagination(true)
  }

  const backButtonHandler = () => {
    --number
    axios
      .get(URL + `/?page=${number}`)
      .then(res => {
        setPosts(res.data.results)
      })
    if (number === 1) {
      setPagination(false)
    }
  }

  return (
    <>
      <Header />
      <button className="filterBtn filter" onClick={filterFemaleCharacters}>{isActive ? buttonActiveText : buttonNonActiveText}</button>
      <CharactersList posts={posts} />
      {pagination ? (
        <button className="filterBtn pagination" onClick={backButtonHandler}>back</button>
      ) : null}
      <button className="filterBtn pagination" onClick={nextButtonHandler}>next</button>
      <ScrollToTop />
    </>
  );
}

export default App;