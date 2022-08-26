function Scoreboard({level, score, bestScore}) {

  return (
    <div className="scoreboard">
      <p>Get points by clicking on an image but don't click on any more than once!</p>
      <div className='counter'>
        <p>Score: {score}</p>
        <p>Best: {bestScore}</p>
      </div>
      <p>Level: {level}</p>
    </div>
  )
}

export default Scoreboard;