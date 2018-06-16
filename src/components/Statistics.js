import React from 'react';

const Statistics = ({completed})=>{

  const total = completed.reduce((total,a)=>total+a.price, 0);

  return (
      <div>
        Statistics
        <h1>Total: {total.toFixed(2)}</h1>
      </div>
  );
};
export default Statistics