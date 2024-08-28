import React, { useEffect, useState } from 'react';

import "./Market.css";

const Market = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [currentTable, setCurrentTable] = useState(1);
  const coinsPerTable = 10;

  useEffect(() => {
    // Fetch data from the CoinGecko API
    const fetchCryptoData = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false'
        );
        const data = await response.json();
        setCryptoData(data);
      } catch (error) {
        console.error("Error fetching crypto data:", error);
      }
    };

    fetchCryptoData();
  }, []);

  const indexOfLastCoin = currentTable * coinsPerTable;
  const indexOfFirstCoin = indexOfLastCoin - coinsPerTable;
  const currentCoins = cryptoData.slice(indexOfFirstCoin, indexOfLastCoin);

  const totalTables = Math.ceil(cryptoData.length / coinsPerTable);

  const handleTableChange = (tableNumber) => {
    setCurrentTable(tableNumber);
  }

  return (
    <section className="market">
      <div className="market-content">
        <h2>Market Update</h2>

        <table className="market-table">
          <thead>
            <tr>
              <th>Coin</th>
              <th>Price</th>
              <th>24h Change</th>
              <th>Market Cap</th>
            </tr>
          </thead>
          <tbody>
            {currentCoins.map((crypto, index) => (
              <tr key={index}>
                <td className="crypto-name">
                  <img src={crypto.image} alt={crypto.name} className="crypto-image" />
                  {crypto.name}
                </td>
                <td>${crypto.current_price.toLocaleString()}</td>
                <td
                  className={crypto.price_change_percentage_24h >= 0 ? 'positive' : 'negative'}
                >
                  {crypto.price_change_percentage_24h.toFixed(2)}%
                </td>
                <td>${crypto.market_cap.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className='market-pagination'>
            {Array.from({ length: totalTables }, (_, index) => (
              <button
                key={index}
                className={`market-pagination-button ${currentTable === index + 1 ? 'active' : ''}`}
                onClick={() => handleTableChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Market;
