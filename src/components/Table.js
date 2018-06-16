import React from 'react';

const Table = ({i, active,name,switchTable})=>{
  return (
      <div
          onClick={()=>switchTable(i)}
          className={i===active? "table active-table": "table"}>
        <h4>{name}</h4>
        <ul>
          <li className="item">
            Preke
            <span className="delete">x</span>
            <span className="price">4.5</span>
          </li>
        </ul>
        <nav>
          <div className="btn">checkout</div>
          <h5>Total: 4.50$</h5>
        </nav>
      </div>
  );
};

export default Table