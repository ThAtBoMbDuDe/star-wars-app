import { useEffect, useState } from 'react';
import './App.scss';

function App() {

  const [peopleArr, setPeople] = useState(null);
  const [planetArr, setPlanets] = useState(null);
  const [startshipArr, setStarships] = useState(null);
  const [vehicleArr, setVehicles] = useState(null);
  const [speciesArr, setSpecies] = useState(null);

  useEffect(() => {
    const fetchPeople = async () => {
       const res = await fetch("https://swapi.dev/api/people/");
      
       const json = await res.json();

       setPeople(json)
    }
    fetchPeople()
    
  }, []);
  useEffect(() => {
    const fetchPlanets = async () => {
       const res = await fetch("https://swapi.dev/api/planets/");
      
       const json = await res.json();

       setPlanets(json)
    }
    fetchPlanets()
    
  }, []);
  useEffect(() => {
    const fetchStarships = async () => {
       const res = await fetch("https://swapi.dev/api/starships/");
      
       const json = await res.json();

       setStarships(json)
    }
    fetchStarships()
    
  }, []);
  useEffect(() => {
    const fetchVehicles = async () => {
       const res = await fetch("https://swapi.dev/api/vehicles/");
      
       const json = await res.json();

       setVehicles(json)
    }
    fetchVehicles()
    
  }, []);
  useEffect(() => {
    const fetchSpecies = async () => {
       const res = await fetch("https://swapi.dev/api/species/");
      
       const json = await res.json();

       setSpecies(json)
    }
    fetchSpecies()
    
  }, []);

  return (
    <div>


    </div>
  );
}

export default App;
