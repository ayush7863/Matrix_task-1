import React, { useEffect, useState } from "react";
import styles from "../styles/token.module.css";
import axios from "axios";
import ic_outline from "../icons/ic_outline.png";
import material from "../icons/material.png";
import pepicons from "../icons/pepicons.png";
// import { useDebounce } from "../hooks/useDebounce";
// import ic_outline-info from "../icons/ic_outline-info.png";

const Token = ({ searchInput }) => {
  const [tokenData, setTokenData] = useState([]);
  // const debounce = useDebounce(searchInput, 5000);
  useEffect(() => {
    axios
      .get(
        "https://api.dexscreener.com/latest/dex/tokens/0x2170Ed0880ac9A755fd29B2688956BD959F933F8,0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"
      )
      .then((res) => setTokenData(res.data.pairs));
    // console.log(tokenData);
  }, []);

  // useEffect(()=>{
  //    if (debounce !== "") {
  //     axios
  //       .get(
  //         `https://api.dexscreener.com/latest/dex/search/?q=${debounce}&limit=10`
  //       )
  //       .then((res) => {
  //         console.log(res.data.pairs);
  //         setTokenData(res.data.pairs);
  //       });
  //   }
  //   // console.log(tokenData);
  // }, [debounce]);

  // console.log(getTrueToken)
  return (
    <div>
      <div id={styles.container}>
        <p id={styles.heading}>Token Search Results</p>
        <div>
          {tokenData.length > 0 &&
            tokenData.map((el) => {
              return (
                <div className={styles.cardsContainer}>
                  <div id={styles.cards}>
                    <div class={styles.cardsData}>
                      <p>Basic Info</p>
                    </div>
                    <div class={styles.cardsData}>
                      <p>Pair Created At</p>
                      <p>{el.pairCreatedAt}</p>
                    </div>
                    <div class={styles.cardsData}>
                      <p>Symbol</p>
                      <p>{el.baseToken.symbol}</p>
                    </div>
                    <div class={styles.cardsData}>
                      <p>Dex Id</p>
                      <p>{el.dexId}</p>
                    </div>
                    <div class={styles.cardsData}>
                      <p>Pair Address</p>
                      <p>#6754</p>
                    </div>
                    <div class={styles.iconDiv}>
                      <img src={ic_outline} alt="a" />
                    </div>
                  </div>
                  <div id={styles.cards}>
                    <div class={styles.cardsData}>
                      <p>Base Token</p>
                    </div>
                    <div class={styles.cardsData}>
                      <p>Name</p>
                      <p>{el.baseToken.name}</p>
                    </div>
                    <div class={styles.cardsData}>
                      <p>Symbol</p>
                      <p>{el.baseToken.symbol}</p>
                    </div>
                    <div class={styles.cardsData}>
                      <p>Address</p>
                      <p>#7890</p>
                    </div>
                    <div class={styles.iconDiv}>
                      <img src={material} alt="a" />
                    </div>
                  </div>
                  <div id={styles.cards}>
                    <div class={styles.cardsData}>
                      <p>Quote Token</p>
                    </div>
                    <div class={styles.cardsData}>
                      <p>Name</p>
                      <p>{el.quoteToken.name}</p>
                    </div>
                    <div class={styles.cardsData}>
                      <p>Symbol</p>
                      <p>{el.quoteToken.symbol}</p>
                    </div>
                    <div class={styles.cardsData}>
                      <p>Address</p>
                      <p>#7890</p>
                    </div>
                    <div class={styles.iconDiv}>
                      <img src={material} alt="a" />
                    </div>
                  </div>
                  <div id={styles.cards}>
                    <div class={styles.cardsData}>
                      <p>Price</p>
                    </div>
                    <div class={styles.cardsData}>
                      <p>Price Native</p>
                      <p>{el.priceNative}</p>
                    </div>
                    <div class={styles.cardsData}>
                      <p>Price USD</p>
                      <p>{el.priceUsd}</p>
                      <div class={styles.iconDiv}>
                        <img src={pepicons} alt="a" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Token;
