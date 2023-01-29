import { useState } from 'react';
import './Dropdown.scss';


const Dropdown = (props) => {
  
  const {searchField, setField, setData, setValue, searchValue} = props;

  const [ display, setDisplay ] = useState('none');

  const endpoint = searchField.toLowerCase();  
  
  const fetchData = async () => {
      const res = await fetch(`https://swapi.dev/api/${endpoint}/?search=${searchValue}`);
      
      const json = await res.json();

      setData(json);
  };
      
   const handleHover = () => {
    if(display=== 'none'){
      setDisplay('block')
    }else {
      setDisplay('none')
    }
  };

  const handleClick = (click) => {
    setField(click.target.innerHTML);
  };

  const updateValue = (event) => {
    setValue(event.target.value)
  };


  return (
    <div>
      <input type="text" onChange={updateValue} onKeyUp={fetchData} placeholder={searchField}/>
      <button onClick={handleHover}><span>Search {searchField}...</span></button>      
      <div className='listHolder' style={{display:display}}>
        <div className='listItem' onClickCapture={handleClick}>
          People
        </div>
        <div className='listItem' onClickCapture={handleClick}>
          Planets
        </div>
        <div className='listItem' onClickCapture={handleClick}>
          Starships
        </div>
        <div className='listItem' onClickCapture={handleClick}>
         Vehicles
        </div>
        <div className='listItem' onClickCapture={handleClick}>
          Species
        </div>
      </div>
    </div>
    
  )
}

export default Dropdown