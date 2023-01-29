import React from 'react'
import { useEffect, useState } from 'react';

const Speciescards = (props) => {
  const { passingData } = props
  const [ speciesHome, setShome] = useState('null')

  useEffect(() => {
    const fetchData = async () => {
       const res = await fetch(`${passingData[0].homeworld}`);
      
       const json = await res.json();

       setShome(json)
    }
    fetchData()
    
  }, []);



  return (
    <>
    {passingData[0] && <div className='itemCard'>
      <h1 className='itemName'>{passingData[0].name}</h1>
      <h2 className='dataTitle'>Classification:</h2>
      <h5 className='dataInfo'>{passingData[0].classification}</h5>
      <h2 className='dataTitle'>Designation:</h2>
      <h5 className='dataInfo'>{passingData[0].designation}</h5>
      <h2 className='dataTitle'>Language:</h2>
      <h5 className='dataInfo'>{passingData[0].language}</h5>
      <h2 className='dataTitle'>Average Lifespan:</h2>
      <h5 className='dataInfo'>{passingData[0].average_lifespan} Years</h5>
      {speciesHome.name && <h2 className='dataTitle'>Homeworld:</h2>}
      {speciesHome.name && <h5 className='dataInfo'>{speciesHome.name}</h5>}
      <h2 className='dataTitle'>Average Height:</h2>
      <h5 className='dataInfo'>{passingData[0].average_height} cm</h5>
      <h2 className='dataTitle'>Eye Colors:</h2>
      <h5 className='dataInfo'>{passingData[0].eye_colors}</h5>
      <h2 className='dataTitle'>Hair Colors:</h2>
      <h5 className='dataInfo'>{passingData[0].hair_colors}</h5>
      <h2 className='dataTitle'>Skin Colors:</h2>
      <h5 className='dataInfo'>{passingData[0].skin_colors}</h5>      
    </div>}
    </>
  )
}

export default Speciescards