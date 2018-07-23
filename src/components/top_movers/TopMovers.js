import React from 'react';
import welcome from '../../assets/images/welcome.png';

import { Col, Card } from 'react-materialize';

class App extends Component {
  state = {
    changes: []
  };

  async componentDidMount() {
    const res = await fetch(
      `https://api.coinmarketcap.com/v1/ticker/${symbol}/`
    );
    const data = await res.json();

    this.setState({
      // return array of ojbect
      data: Object.keys(data.bpi).map(date => {
        return {
          date,
          price: data.bpi[date]
        };
      })
    });
  }
}

export default props => {
  console.log(props);
  let movers = [];
  props.topMovers.map(mover => {
    movers.push(mover.CoinInfo.FullName);
  });
  // console.log(movers);
  async function fetchChanges(symble) {
    const res = await fetch(
      `https://api.coinmarketcap.com/v1/ticker/${symbol}/`
    );
    const data = await res.json();
    this.setState({});
  }

  return (
    <div id="top-movers" className="hide-on-small-and-down">
      <div className="title-more">
        <h4>Top Movers</h4>
        <span>
          {' '}
          <a className="btn-floating btn-medium waves-effect waves-light indigo lighten-3">
            <i className="material-icons">more_horiz</i>
          </a>
        </span>
      </div>
      <div className="card-box">
        <Col m={3} s={6}>
          <Card
            className="grey lighten-5 hoverable"
            textClassName="grey-text"
            title="Card title"
            actions={[<a href="#">This is a link</a>]}
            key="22231"
          >
            I am a very simple card.
          </Card>
        </Col>
        <Col m={3} s={6}>
          <Card
            className="grey lighten-5 hoverable"
            textClassName="grey-text"
            title="Card title"
            actions={[<a href="#">This is a link</a>]}
            key="222531"
          >
            I am a very simple card.
          </Card>
        </Col>
        <Col m={3} s={6}>
          <Card
            className="grey lighten-5 hoverable"
            textClassName="grey-text"
            title="Card title"
            actions={[<a href="#">This is a link</a>]}
            key="222315"
          >
            I am a very simple card.
          </Card>
        </Col>
        <Col m={3} s={6}>
          <Card
            className="grey lighten-5 hoverable"
            textClassName="grey-text"
            title="Card title"
            actions={[<a href="#">This is a link</a>]}
            key="2223157"
          >
            I am a very simple card.
          </Card>
        </Col>
      </div>
    </div>
  );
};
