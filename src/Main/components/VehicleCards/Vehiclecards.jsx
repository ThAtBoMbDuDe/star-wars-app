import React from 'react'

const Vehiclecards = (props) => {
  const { passingData } = props








  return (
    <>
    {passingData[0] && <div>
      <h2>{passingData[0].name}</h2>
    </div>}
    </>
  )
}

export default Vehiclecards