import { FilterList, Search, SearchOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import "./Navbar.css";
import { useSelector } from "react-redux";

export default function Navbar(props) {
  const airlines = useSelector((state) => state.fetch.airlines);
  // console.log(airlines)
  const countries = airlines && airlines.map((airlines) => airlines.country);
  const [value,setValue] =useState('');
  // console.log(countries);
  // const coun = ["Thailand","Hong Kong","Quatar","Dubai","Germany","Taiwan","Japan","Austrailia","Switzerland","Singapore","Sri Lanka","Earth","France","Nomansland","Spain","Allemagne","Myanmar"]
  // const uniquecountry = countries && countries.filter((x,i,a) => a.indexOf(x) === i);
  // console.log(uniquecountry);
  // const handleSearch = () => {
  //         switch(coun){
  //           case 'Thailand':

  //         }
  // };
        
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-secondary" id="nav">
      <img src="logo.png" className="logo" alt="logo" />
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="input-group ps-5" id="search">
          <div id="searchbar" class="form-outline">
            <input
              type="search"
              id="searchbar"
              class="form-control"
              placeholder="Search"
              value={props.value}
              onChange={props.handleSearch}
            />
          </div>
          <button
            type="button"
            class="btn btn-primary btn-sm"
            id="searchbtn"
            onClick={props.handleSearch}
          >
            <Search />
          </button>
        </div>
        <div className="filter dropdown">
            {/* <select class="form-select" aria-label="Default select example">
            {uniquecountry && uniquecountry.map((country,id) => 
              (
                <option class="dropdown-menu options" key={id} value={country}>{country}
                  </option>
                  // <li key={country}>{uniquecountry}</li>
                  ))}
            </select> */}

                <select className="form-select" onChange={props.handleFilter}>
                    <option value="All">Filter</option>
                    <option value="Thailand">Thailand</option>
                    <option value="Dubai">Dubai</option>
                    <option value="Hong Kong">Hong Kong</option>
                    <option value="Myanmar">Myanmar</option>
                    <option value="Germany">Germany</option>
                    <option value="Taiwan">Taiwan</option>
                    <option value="Austrailia">Austrailia</option>
                    <option value="Japan">Japan</option>
                    <option value="Earth">Earth</option>
                    <option value="Switzerland">Switzerland</option>
                    <option value="France">France</option>
                    <option value="Sri Lanka">Sri Lanka</option>
                    <option value="Nomansland">Nomansland</option>
                    <option value="Allemagne">Allemagne</option>
                    <option value="Spain">Spain</option>
                </select>
            
        </div>
      </div>
    </nav>
  );
}
