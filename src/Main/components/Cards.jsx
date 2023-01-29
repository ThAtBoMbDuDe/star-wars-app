import Peoplecards from './PeopleCards/Peoplecards';
import Planetcards from './PlanetCards/Planetcards';
import Starshipcards from './StarshipCards/Starshipcards';
import Vehiclecards from './VehicleCards/Vehiclecards';
import Speciescards from './SpeciesCards/Speciescards';
import './Cards.scss';





const Cards = (props) => {

  const {searchField, searchValue, dataArr} = props

  const logging = () => {
    if(dataArr && searchValue && searchField === 'People'){
      const searchNames = dataArr.results.filter((item) => {
        return item.name.toLowerCase().includes(searchValue.toLowerCase())
      });
    return searchNames
    }if(dataArr &&  searchValue && searchField === 'Planets'){
      const searchNames = dataArr.results.filter((item) => {
        return item.name.toLowerCase().includes(searchValue.toLowerCase())
      });
      return searchNames
    }if(dataArr &&  searchValue && searchField === 'Starships'){
      const searchNames = dataArr.results.filter((item) => {
        return item.name.toLowerCase().includes(searchValue.toLowerCase())
      });
      return searchNames
    }if(dataArr &&  searchValue && searchField === 'Vehicles'){
      const searchNames = dataArr.results.filter((item) => {
        return item.name.toLowerCase().includes(searchValue.toLowerCase())
      });
      return searchNames
    }if(dataArr &&  searchValue && searchField === 'Species'){
      const searchNames = dataArr.results.filter((item) => {
        return item.name.toLowerCase().includes(searchValue.toLowerCase())
      });
      return searchNames
    } else {
      return null
    }
  };

    
    const passingData = logging()
    

  return (
    <div>
      {searchField === "People" && passingData && searchValue && <Peoplecards passingData={passingData}/>}
      {searchField === "Planets" && passingData && searchValue && <Planetcards passingData={passingData}/>}
      {searchField === "Starships" && passingData && searchValue && <Starshipcards passingData={passingData}/>}
      {searchField === "Vehicles" && passingData && searchValue && <Vehiclecards passingData={passingData}/>}
      {searchField === "Species" && passingData && searchValue && <Speciescards passingData={passingData}/>}
    </div>
  )
}

export default Cards