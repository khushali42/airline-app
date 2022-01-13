import { FilterList, Search, SearchOutlined } from "@material-ui/icons";
import React from "react";
import "./Navbar.css";
export default function Navbar() {
  return (
    //   <nav className="navbar nav">
    //     <div className="navbar text-dark ">
    //     <ul>
    //       <li className='navbar text-dark'>
    //         <img src='logo.png' className='logo' alt='logo'/>
    //       </li>
    //       <div>
    //           <input type='text'/><SearchOutlined/> Search
    //     </div>
    //     <div>
    //       <ul className="navbar-nav">
    //         <li className="nav-item">
    //           <FilterList/> Filter
    //         </li>
    //       </ul>
    //     </div>
    //     </ul>
    //   {/* <div className="container-fluid">

    //     </div> */}

    //   </div>
    // </nav>
    <nav class="navbar navbar-expand-lg navbar-light bg-secondary">
      <img src="logo.png" className="logo" alt="logo" />
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="input-group ps-5" id='search'>
          <div id="searchbar" class="form-outline">
            <input
              type="search"
              id="searchbar"
              class="form-control"
              placeholder="Search"
            />
          </div>
          <button type="button" class="btn btn-primary btn-sm" id="searchbtn" onClick={handleSearch}>
            <Search/>
          </button>
        </div>
        <div className='filter'>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <FilterList /> Filter
          </li>
        </ul>
        </div>
      </div>
    </nav>
  );
}
