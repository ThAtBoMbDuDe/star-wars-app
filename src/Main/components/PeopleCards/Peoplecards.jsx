import React from 'react'
import { useState, useEffect } from 'react'

const Peoplecards = (props) => {
 const { passingData } = props
 const [ characterHome, setChome] = useState('null')

 useEffect(() => {
   const fetchData = async () => {
      const res = await fetch(`${passingData[0].homeworld}`);
     
      const json = await res.json();

      setChome(json)
   }
   fetchData()
   
 }, []);



  return (
    <>
    {passingData[0] && <div className='itemCard'>
      <h1 className='itemName'>{passingData[0].name}</h1>
      <h2 className='dataTitle'>Gender:</h2>
      <h5 className='dataInfo'>{passingData[0].gender}</h5>
      <h2 className='dataTitle'>Mass:</h2>
      <h5 className='dataInfo'>{passingData[0].mass} kg</h5>
      <h2 className='dataTitle'>Height:</h2>
      <h5 className='dataInfo'>{passingData[0].height} cm</h5>
      <h2 className='dataTitle'>Birth Year:</h2>
      <h5 className='dataInfo'>{passingData[0].birth_year}</h5>
      {characterHome.name && <h2 className='dataTitle'>Homeworld:</h2>}
      {characterHome.name && <h5 className='dataInfo'>{characterHome.name}</h5>}
      <h2 className='dataTitle'>Eye Color:</h2>
      <h5 className='dataInfo'>{passingData[0].eye_color}</h5>
      <h2 className='dataTitle'>Hair Color:</h2>
      <h5 className='dataInfo'>{passingData[0].hair_color}</h5>
      <h2 className='dataTitle'>Skin Color:</h2>
      <h5 className='dataInfo'>{passingData[0].skin_color}</h5>      
    </div>}
    </>
  )
}

export default Peoplecards