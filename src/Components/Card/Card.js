function Card({id, name, sprite, isClicked}) {

  function truncateAt(str, char) {
    var idx = str.indexOf(char);
    return idx === -1 ? str : str.substr(0, idx);
  }

  name = truncateAt(name, '-')

  function handleClick() {
    isClicked(id);
  }

  return (
    <div className="card" onClick={handleClick}>
      <img src={sprite} alt={name}></img>
      <p>{name[0].toUpperCase() + name.substring(1)}</p>
    </div>
  )
}

export default Card;