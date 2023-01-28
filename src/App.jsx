import { useEffect, useState } from 'react';
import Search from './Navbar/Search';
import './App.scss';

function App() {


  const [ searchField, setField] = useState('');
  const [dataArr, setData] = useState(null);



console.log(dataArr)


  return (
    <div>
      <Search searchField={searchField} setField={setField} setData={setData}/>

    </div>
  );
}

export default App;
