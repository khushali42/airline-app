import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { fetchAirlines } from '../../Redux/Action';
import { baseURL } from '../../Redux/API';
import AirlineCard from '../AirlineCard/AirlineCard';
import Navbar from '../Navbar/Navbar';
export default function Main() {
    const airlines =useSelector((state) => state.fetch);
    // const air = useSelector((state) => state.fetch.airlines);
    const [state, setState] =useState(airlines)
  // console.log(airlines)
  console.log(state)
  // const countries = air && air.map((air) => air.country);
    // console.log(countries)
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchAirlines(baseURL))
    }, [])
    
    useEffect(() => {
      dispatch(fetchAirlines(baseURL))
    }, [state])
    
    const handleFilter = (e) => {
      console.log(e.target.value);
      setState(airlines.airlines.filter((airline) => airline.country === e.target.value))
      console.log('Filtered airlines',state)
    }

    const handleSearch = (e) => {
        // console.log(e.target.value)
        setState(airlines.airlines.filter((airline) => airline.name === e.target.value));
        console.log('Searched airline',state)
    }
    return (
      <>
        <Navbar handleFilter={handleFilter} handleSearch={handleSearch}/>
        <div>
        {airlines.loading ? (
          <h2>LOADING</h2>
        ) : airlines.error ? (
          <h2>{airlines.error}</h2>
        ) : (
          <div className="py-5 mx-2 row">
            {airlines && airlines.airlines && airlines.airlines.map((airline, id) => (
              <AirlineCard
                key={id}
                name={airline.name}
                logo={airline.logo}
                country={airline.country}
                established={airline.established}
                head_quaters={airline.head_quaters}
                website={airline.website}
                slogan={airline.slogan}
              />
            ))}
          </div>
        )} 
      </div>
      </>
    )
}
