import React, { useState, useEffect } from 'react';

export const TokenCard = ({ id }) => {
  // eslint-disable-next-line
  const [tokenData, setTokenData] = useState(null);
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setTokenData(data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);
  if (Loading) {
    return <div>Loading</div>;
  }
  return (
    <div className="token-container">
      {tokenData && (
        <div className="token-info">
          <img className="token-logo" src={tokenData.image.small} alt="" />
          <div className="token-title-container">
            <span className="token-title">{tokenData.name}</span>
            <span className="token-title-long">
              {tokenData.asset_platform_id}
            </span>
          </div>
          <div className="token-amount-container">
            <div className="token-amount">12</div>
            <div className="token-amount-long">
              <div className="token-price">
                {tokenData.market_data.current_price.usd}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TokenCard;
