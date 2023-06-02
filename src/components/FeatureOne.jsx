import React from 'react';
import TokenCard from './TokenCard';

export const FeatureOne = () => {
  const tokens = ['0x', 'bitcoin'];

  return (
    <div className="feature-container">
      <div className="swap-token-container">
        <div className="tokens-container">
          {tokens.map((token, index) => {
            return <TokenCard id={token} />;
          })}
        </div>
      </div>
      <div className="feature-description">
        <div className="feature-description-title">
          <h1>
            <span className="highlighted">Swap</span> Any Token, Any Chain
          </h1>
        </div>
        <p className="feature-description-paragraph"></p>
      </div>
    </div>
  );
};

export default FeatureOne;
