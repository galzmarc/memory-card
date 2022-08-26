import { useCallback, useEffect, useState } from "react";

import Scoreboard from "../Scoreboard/Scoreboard";
import CardsGrid from "../CardsGrid/CardsGrid";
import GameOver from "../GameOver/GameOver";

function Main() {

  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0)
  const [level, setLevel] = useState(1);
  const [pokemonAmount, setPokemonAmount] = useState(4)
  const [pokemons, setPokemons] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);

  async function getPokemon(id) {
    try {
      const urlToFetch = "https://pokeapi.co/api/v2/pokemon/";
      const response = await fetch(urlToFetch + id)
      if (response.ok) {
        const jsonResponse = await response.json();
        const id = jsonResponse.id;
        const name = jsonResponse.name;
        const sprite = jsonResponse.sprites.other['official-artwork'].front_default;
        if (!pokemons.includes(id)) {
          setPokemons(pokemons => [...pokemons, {id, name, sprite}]);
        } else {
          getPokemon(id);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  function getRandomIndex() {
    return Math.floor(Math.random() * 898);
  }

  useEffect(() => {
    setPokemons([]);
    const id = getRandomIndex();
    for (let i = id; i < id + pokemonAmount; i++) {
      getPokemon(i);
    }
  }, [level])

  function shuffleArray(array) {
    return [...array].sort(() => Math.random() - 0.5)
  }

  function handleScore() {
    const newScore = score + 1;
    if (newScore > bestScore) setBestScore(newScore);
    setScore(newScore);
  }

  function handleLevelIncrease() {
    setLevel(level + 1);
    setPokemons([]);
    setClickedCards([]);
    if (pokemonAmount < 12) {
      setPokemonAmount(pokemonAmount + 1);
    }
  }

  function knowsAllCards(count) {
    return clickedCards.length === count -1;
  }

  function handleCardClick(id) {
    if (clickedCards.includes(id)) {
      setIsGameOver(true);
    } else {
      handleScore();
      setClickedCards(clickedCards => [...clickedCards, id]);
      setPokemons(shuffleArray(pokemons));
    }
    if (knowsAllCards(pokemons.length)) {
      handleLevelIncrease();
    }
  }

  function resetGame() {
    setLevel(1);
    setPokemons([]);
    setPokemonAmount(4);
    setClickedCards([]);
    setScore(0);
    setIsGameOver(false);
  }

  return (
    <main>
      <Scoreboard level={level} score={score} bestScore={bestScore}/>
      {pokemons && (<CardsGrid pokemons={pokemons} handleCardClick={handleCardClick} />)}
      {isGameOver && <GameOver score={score} resetGame={resetGame} />}
    </main>
  )
}

export default Main;