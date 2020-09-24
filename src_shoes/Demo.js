import React, { useState } from 'react';
import './Demo.css';
import dataProducts from './AppData';

function Demo() {
  return (
    <div className="dropdown_select">
      <div>
        {
          dataProducts.map((moreData, index) => {
            return <div>
              <div>{moreData.title}</div>
              <div>{moreData.img}</div>
              <div>{moreData.price}</div>
              <div>{moreData.info}</div>
            </div>
          })
        }
      </div>
    </div>
  )
}
export default Demo