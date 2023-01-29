import React from 'react'
import Dropdown from './Searchparams/Dropdown'


const Search = (props) => {
  const {searchField, setField, setData, setValue, searchValue} = props



  return (
    <>
      <Dropdown searchField={searchField} setField={setField} setData={setData} setValue={setValue} searchValue={searchValue}/>
      


    </>
  )
}

export default Search