import React from 'react'
import { useState, useEffect } from 'react'

const Planetcards = (props) => {
  const { passingData } = props
  const [ homeResidents, setResidents] = useState('null')

//   useEffect(() => {
//     const fetchData = async () => {
//        const res = await passingData[0].residents.forEach(resident => {
//         fetch(`${resident}`);
//       }); 
      
//        const json = await res.json();
//       console.log(json)
//        setResidents(json)
      
//     }
//     fetchData()
    
//   }, []);

// console.log(homeResidents)


  return (
    <>
    {passingData[0] && <div className='itemCard'>
      <h1 className='itemName'>{passingData[0].name}</h1>
      <h2 className='dataTitle'>Climate:</h2>
      <h5 className='dataInfo'>{passingData[0].climate}</h5>
      <h2 className='dataTitle'>Terrain:</h2>
      <h5 className='dataInfo'>{passingData[0].terrain}</h5>
      <h2 className='dataTitle'>Surface Water:</h2>
      <h5 className='dataInfo'>{passingData[0].surface_water}%</h5>
      <h2 className='dataTitle'>Gravity:</h2>
      <h5 className='dataInfo'>{passingData[0].gravity} Years</h5>
      <h2 className='dataTitle'>Diameter:</h2>
      <h5 className='dataInfo'>{passingData[0].diameter}</h5>
      <h2 className='dataTitle'>Year Length:</h2>
      <h5 className='dataInfo'>{passingData[0].orbital_period} Days</h5>
      <h2 className='dataTitle'>Day Length:</h2>
      <h5 className='dataInfo'>{passingData[0].rotation_period} Hours</h5>
      <h2 className='dataTitle'>Population:</h2>
      <h5 className='dataInfo'>{passingData[0].population}</h5>
      {homeResidents.name && <h2 className='dataTitle'>Home To:</h2>}
      {homeResidents.name && <h5 className='dataInfo'>{homeResidents.name}</h5>}      
    </div>}
    </>
  )
}

export default Planetcards