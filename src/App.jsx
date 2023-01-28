import { useState } from 'react';
import Search from './Navbar/Search';
import './App.scss';
import Cards from './Main/components/Cards';

function App() {


  const [searchField, setField] = useState('');
  const [dataArr, setData] = useState(null);
  const [searchValue, setValue] = useState('');




  return (
    <div>
      <Search searchField={searchField} setField={setField} setData={setData} setValue={setValue}/>
      {dataArr && <Cards searchField={searchField} searchValue={searchValue} dataArr={dataArr}/>}
    </div>
  );
}

export default App;
