

const Vehiclecards = (props) => {
  const { passingData } = props





console.log(passingData[0])


  return (
    <>
    {passingData[0] && <div className='itemCard'>
      <h1 className='itemName'>{passingData[0].name}</h1>
      <h2 className='dataTitle'>Starship Class:</h2>
      <h5 className='dataInfo'>{passingData[0].vehicle_class}</h5>
      <h2 className='dataTitle'>Model:</h2>
      <h5 className='dataInfo'>{passingData[0].model}</h5>
      <h2 className='dataTitle'>Max Passengers:</h2>
      <h5 className='dataInfo'>{passingData[0].passengers} Passengers</h5>
      <h2 className='dataTitle'>Max Cargo Capacity:</h2>
      <h5 className='dataInfo'>{passingData[0].cargo_capacity} kg</h5>
      <h2 className='dataTitle'>Max Atmospheric Speed:</h2>
      <h5 className='dataInfo'>{passingData[0].max_atmosphering_speed} MGLT</h5>
      <h2 className='dataTitle'>Minimum Crew to Operate:</h2>
      <h5 className='dataInfo'>{passingData[0].crew}</h5>
      <h2 className='dataTitle'>Cost:</h2>
      <h5 className='dataInfo'>ᖬ{passingData[0].cost_in_credits}</h5>
      <h2 className='dataTitle'>Max Time without Resupply:</h2>
      <h5 className='dataInfo'>{passingData[0].consumables}</h5>
      <h2 className='dataTitle'>Manufacturer:</h2>
      <h5 className='dataInfo'>{passingData[0].manufacturer}</h5>
    </div>}
    </>
  )
}

export default Vehiclecards