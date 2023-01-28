import React from 'react'

const Starshipcards = (props) => {
  const { passingData } = props











  return (
    <>
    {passingData[0] && <div>
      <h1>{passingData[0].name}</h1>
      <h2>Starship Class:</h2>
      <h4>{passingData[0].starship_class}</h4>
      <h2>Model:</h2>
      <h4>{passingData[0].model}</h4>
      <h2>Max Passengers:</h2>
      <h4>{passingData[0].passengers} Passengers</h4>
      <h2>Max Cargo Capacity:</h2>
      <h4>{passingData[0].cargo_capacity} kg</h4>
      <h4>{passingData[0].max_atmosphering_speed}</h4>
      <h4>{passingData[0].hyperdrive_rating}</h4>
      <h4>{passingData[0].cost_in_credits}</h4>
      <h4>{passingData[0].consumables}</h4>
      <h4>{passingData[0].manufacturer}</h4>
    </div>}
    </>
  )
}

export default Starshipcards