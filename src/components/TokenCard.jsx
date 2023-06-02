import React, { useState, useEffect } from 'react';

export const TokenCard = ({ id }) => {
  // eslint-disable-next-line
  const [TokenData, setTokenData] = useState(null);
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then((response) => response.json())
      .then((data) => console.log)
      .catch((error) => console.log(error));

    setLoading(false);
    // eslint-disable-next-line
  }, []);
  if (Loading) {
    return <div>Loading</div>;
  }
  return (
    <div className="token-container">
      <div className="token-info">
        <img className="token-logo" src="" alt="" />
        <div className="token-title-container">
          <span className="token-title"></span>
          <span className="token-title-long"></span>
        </div>
        <div className="token-amount-container">
          <div className="token-amount">10</div>
          <div className="token-amount-long">
            <div className="token-price"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenCard;
