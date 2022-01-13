import axios from 'axios'
import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { fetchAirlines } from '../../Redux/Action';
import { baseURL } from '../../Redux/API';
import AirlineCard from '../AirlineCard/AirlineCard';
export default function Main() {
    const airlines =useSelector((state) => state.fetch);
    console.log(airlines)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAirlines(baseURL))
    }, [])
    return (
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
    )
}
