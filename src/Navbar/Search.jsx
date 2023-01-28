import React from 'react'
import Dropdown from './Searchparams/Dropdown'


const Search = (props) => {
  const {searchField, setField, setData, setValue} = props



  return (
    <>
      <Dropdown searchField={searchField} setField={setField} setData={setData} setValue={setValue}/>



    </>
  )
}

export default Search