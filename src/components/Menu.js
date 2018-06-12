import React from 'react';
import imgDrink from '../images/drinks.png';

const Menu = (props)=>{
  return (
      <div className="menu">
        <div className="categories">
          <div className="category">
            <img src={imgDrink} alt=""/>
            <h3>Drink</h3>
          </div>
        </div>
        <ul className="menu-items">
          <li>
            drink
            <span>1.50$</span>
          </li>
        </ul>
      </div>
  );
};
export default Menu