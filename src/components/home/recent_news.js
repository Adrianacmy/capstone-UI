import React, { Component } from 'react';
import welcome from '../../assets/images/welcome.png';

import { Col, Card, CardTitle } from 'react-materialize';

export default () => {
  return (
    <div id="recent-news" className="hide-on-small-and-down">
      <h4>Recent News</h4>
      <div className="card-box">
        <Col className="z-depth-0">
          <Card
            horizontal
            header={<CardTitle image={welcome} />}
            actions={[<a href="#">This is a link</a>]}
          >
            <p>
              I am a very simple card. I am good at containing small bits of
              information
            </p>
          </Card>
        </Col>
        <Col>
          <Card
            horizontal
            header={<CardTitle image={welcome} />}
            actions={[<a href="#">This is a link</a>]}
          >
            <p>
              I am a very simple card. I am good at containing small bits of
              information
            </p>
          </Card>
        </Col>
        <Col>
          <Card
            horizontal
            header={<CardTitle image={welcome} />}
            actions={[<a href="#">This is a link</a>]}
          >
            <p>
              I am a very simple card. I am good at containing small bits of
              information
            </p>
          </Card>
        </Col>
        <Col>
          <Card
            horizontal
            header={<CardTitle image={welcome} />}
            actions={[<a href="#">This is a link</a>]}
          >
            <p>
              I am a very simple card. I am good at containing small bits of
              information
            </p>
          </Card>
        </Col>
        <Col>
          <Card
            horizontal
            header={<CardTitle image={welcome} />}
            actions={[<a href="#">This is a link</a>]}
          >
            <p>
              I am a very simple card. I am good at containing small bits of
              information
            </p>
          </Card>
        </Col>
      </div>
    </div>
  );
};
