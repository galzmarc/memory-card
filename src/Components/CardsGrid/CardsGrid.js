import { useState } from "react";

import Card from "../Card/Card";

function CardsGrid({pokemons, handleCardClick}) {

  function isClicked(id) {
    handleCardClick(id);
  }

  return (
    <div className="cardsGrid">
    {pokemons.map(p => {
      return <Card key={p.id} id={p.id} name={p.name} sprite={p.sprite} isClicked={isClicked}/>
    })}
  </div>
  )
}

export default CardsGrid