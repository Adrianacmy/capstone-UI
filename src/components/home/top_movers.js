import React, { Component } from 'react';
import welcome from '../../assets/images/welcome.png';

import { Col, Card } from 'react-materialize';

export default () => {
  return (
    <div id="top-movers" className="hide-on-small-and-down">
      <div class="title-more">
        <h4>Top Movers</h4>
        <span>
          {' '}
          <a class="btn-floating btn-medium waves-effect waves-light indigo lighten-3">
            <i class="material-icons">add</i>
          </a>
        </span>
      </div>
      <div className="card-box">
        <Col m={3} s={6}>
          <Card
            className="purple lighten-5 hoverable"
            textClassName="grey-text"
            title="Card title"
            actions={[<a href="#">This is a link</a>]}
          >
            I am a very simple card.
          </Card>
        </Col>
        <Col m={3} s={6}>
          <Card
            className="blue lighten-5 hoverable"
            textClassName="grey-text"
            title="Card title"
            actions={[<a href="#">This is a link</a>]}
          >
            I am a very simple card.
          </Card>
        </Col>
        <Col m={3} s={6}>
          <Card
            className="purple lighten-5 hoverable"
            textClassName="grey-text"
            title="Card title"
            actions={[<a href="#">This is a link</a>]}
          >
            I am a very simple card.
          </Card>
        </Col>
        <Col m={3} s={6}>
          <Card
            className="blue lighten-5 hoverable"
            textClassName="grey-text"
            title="Card title"
            actions={[<a href="#">This is a link</a>]}
          >
            I am a very simple card.
          </Card>
        </Col>
      </div>
    </div>
  );
};
