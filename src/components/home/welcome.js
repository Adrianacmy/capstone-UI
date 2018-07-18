import React, { Component } from 'react';
import welcome from '../../assets/images/welcome.png';

export default () => {
  return (
    <div id="welcome">
      <h3>Welcome to EnBazaar</h3>
      <img src={welcome} className="responsive-img" />
    </div>
  );
};
