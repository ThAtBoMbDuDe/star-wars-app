import { useState } from 'react';
import Search from './Navbar/Search';
import './App.scss';
import Cards from './Main/components/Cards';

function App() {


  const [searchField, setField] = useState('');
  const [dataArr, setData] = useState(null);
  const [searchValue, setValue] = useState('');




  return (
    <div className='webpage'>
      <Search searchField={searchField} setField={setField} setData={setData} setValue={setValue} searchValue={searchValue}/>
      {dataArr && <Cards searchField={searchField} dataArr={dataArr} searchValue={searchValue}/>}
    </div>
  );
}

export default App;
