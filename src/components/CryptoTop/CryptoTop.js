import React, { useEffect, useState } from "react";

import "./CryptoTop.css";

import CryptoCard from "../CryptoCard/CryptoCard";

const CryptoTop = () => {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    // Fetch data from the CoinGecko API
    const fetchCryptoData = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false"
        );
        const data = await response.json();
        setCryptoData(data);
      } catch (error) {
        console.error("Error fetching crypto data:", error);
      }
    };

    fetchCryptoData();
  }, []);

  return (
    <div className="crypto-list">
      {cryptoData.map((crypto, index) => (
        <CryptoCard
          img={crypto.image}
          title={crypto.name}
          grow={crypto.price_change_percentage_24h.toFixed(2)}
          price={crypto.current_price.toLocaleString()}
        />
      ))}
    </div>
  );
};

export default CryptoTop;
