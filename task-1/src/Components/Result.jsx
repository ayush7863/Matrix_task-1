import React, { useState } from "react";
import styles from "../styles/result.module.css";
import { BsSearch } from "react-icons/bs";
import Token from "../Pages/Token";
import Pair from "../Pages/Pair";
import Footer from "../Pages/Footer";

const Result = ({flag}) => {
  const [searchInput, setSearchInput] = useState(""); 
  const handleChange = (event) => {
    setSearchInput(event.target.value); 
  };
  // console.log(searchInput)
  return (
    <div>
      <div id={styles.container}>
        <nav id={styles.navbar}>
          <input
            id={styles.search}
            placeholder="Search"
            type="text"
            value={searchInput}
            onChange={handleChange}
            
          />
          <BsSearch class={styles.search_icon} />
          <div class={styles.menu_link}>
            <p>Connect</p>
          </div>
        </nav>
        <div>
            {flag === true ?  <Pair searchInput={searchInput}/>: <Token/>}          
        </div> 
        <Footer/>      
      </div>

    </div>
  );
};

export default Result;
