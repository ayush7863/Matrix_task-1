import React, { useEffect, useState } from "react";
import styles from "../styles/token.module.css";
import axios from "axios";
import { useDebounce } from "../hooks/useDebounce";

const Pair = ({ searchInput }) => {
  const [tokenData, setTokenData] = useState([]);
  const debounce = useDebounce(searchInput, 5000);
  // console.log(debounce);
  useEffect(() => {
    axios
      .get(
        `https://api.dexscreener.com/latest/dex/pairs/bsc/0x7213a321F1855CF1779f42c0CD85d3D95291D34C,0x16b9a82891338f9ba80e2d6970fdda79d1eb0dae`
      )
      .then((res) => setTokenData(res.data.pairs));
  }, []);
  useEffect(() => {
    if (debounce !== "") {
      axios
        .get(
          `https://api.dexscreener.com/latest/dex/search/?q=${debounce}&limit=10`
        )
        .then((res) => {
          console.log(res.data.pairs);
          setTokenData(res.data.pairs);
        });
    }
    // console.log(tokenData);
  }, [debounce]);

  console.log(tokenData)
  return (
    <div>
      <div id={styles.container}>
        <p id={styles.heading}>Pair Search Results</p>
        <div>
          {tokenData.length>0 &&
            tokenData.map((el) => {
              // console.log(el)
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

export default Pair;
