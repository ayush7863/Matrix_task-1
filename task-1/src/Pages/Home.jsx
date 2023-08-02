import React, { useState } from "react";
import styles from "../styles/sidebar.module.css";
// import { TbHexagon3D, TbHexagonalPrism, TbHexagons } from "react-icons/tb";
import logo from "../icons/logo.png";
import pair from "../icons/pair.png";
import token from "../icons/token.png";
import linkedin from "../icons/linkedin .png";
import facebook from "../icons/facebook .png";
import twitter from "../icons/twitter .png";
import Result from "../Components/Result";
import Footer from "./Footer";
// import { Link } from "react-router-dom";

const Home = () => {
  const [flag, setFlag] = useState(false);
  

  return (
    <div>
      <aside class={styles.container}>
        <div id={styles.sidebar}>
          <div class={styles.side_1}>
            <div id={styles.logoBtn} class={styles.side_1_style}>
              <img src={logo} alt="logo" />
              <p>NFTify</p>
            </div>
            <div    
              id={styles.tokenBtn}
              class={styles.side_1_style}
              onClick={() => setFlag(!flag)}
              style={flag===false? {backgroundColor:"#f30050"}:{backgroundColor:""}}
            >
              <img src={token} alt="logo" />
              <p>Token Address</p>
            </div>
            <div
              id={styles.pairBtn}
              class={styles.side_1_style}
              onClick={() => setFlag(!flag)}
              style={flag===true ? {backgroundColor:"#f30050"}:{backgroundColor:""}}
            >
              <img src={pair} alt="logo" />
              <p>Pair Address</p>
            </div>
          </div>
          <div class={styles.side_2}>
            <div class={styles.social_icons}>
              <img src={facebook} alt="facebook" />
              <img src={linkedin} alt="linkedin" />
              <img src={twitter} alt="twitter" />
            </div>
          </div>
        </div>
        {/* <div id={styles.result}></div> */}
      </aside>
      <div>
        <Result flag={flag}/>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
