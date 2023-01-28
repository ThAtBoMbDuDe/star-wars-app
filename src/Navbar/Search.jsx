import React from 'react'
import Dropdown from './Searchparams/Dropdown'


const Search = (props) => {
  const {searchField, setField, setData} = props



  return (
    <>
      <Dropdown searchField={searchField} setField={setField} setData={setData}/>



    </>
  )
}

export default Search