import { useState } from 'react';


const Dropdown = (props) => {
  
  const {searchField, setField, setData, setValue} = props;

  const [ display, setDisplay ] = useState('none');

  const endpoint = searchField.toLowerCase();  
  
  const fetchData = async () => {
      const res = await fetch(`https://swapi.dev/api/${endpoint}/`);
      
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
      <div>Search {searchField}...</div>
      <input type="text" onChange={updateValue} placeholder={searchField}/>
      <button onClick={handleHover}>Click Me</button>      
      <div style={{display:display}}>
        <div onClickCapture={handleClick} onClick={fetchData}>
          People
        </div>
        <div onClickCapture={handleClick} onClick={fetchData}>
          Planets
        </div>
        <div onClickCapture={handleClick} onClick={fetchData}>
          Starships
        </div>
        <div onClickCapture={handleClick} onClick={fetchData}>
         Vehicles
        </div>
        <div onClickCapture={handleClick} onClick={fetchData}>
          Species
        </div>
      </div>
    </div>
  )
}

export default Dropdown