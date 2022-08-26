function GameOver({score, resetGame}) {

  function handleClick() {
    resetGame()
  }

  return (
    <div className="modal">
      <h1>Game Over!</h1>
      <p>Your score is: {score}</p>
      <button onClick={handleClick}>New Game</button>
    </div>
  )
}

export default GameOver;