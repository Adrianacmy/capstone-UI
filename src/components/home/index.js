import React, { Component } from 'react';

import { Row, Col, Typography } from 'react-materialize';

import Welcome from './welcome';
import AppStatus from './application_status';

import './home.css';

export default () => {
  return (
    <div className="container">
      <Row>
        <Col s={12} m={7}>
          <Welcome />
        </Col>
      </Row>
      <Row>
        <Col s={12} m={7}>
          <AppStatus />
        </Col>
      </Row>
    </div>
  );
};
