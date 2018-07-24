import React from 'react';
import welcome from '../../assets/images/welcome.png';

import { Col, Card } from 'react-materialize';

export default props => {
  let localMovers;
  if (!props.topMovers) {
    localMovers = ['bitcoin'];
  } else {
    localMovers = props.topMovers.slice(0, 4);
  }
  // console.log(localMovers)
  return (
    <div id="top-movers" className="hide-on-small-and-down">
      <div className="title-more">
        <h4>Most Volumes</h4>
        <span>
          {' '}
          <a className="btn-floating btn-medium waves-effect waves-light indigo lighten-3">
            <i className="material-icons">more_horiz</i>
          </a>
        </span>
      </div>
      <div className="card-box">
        {localMovers.map(symbl => {
          return (
            <Col m={3} s={6} key={symbl.CoinInfo.Id}>
              <Card
                className="grey lighten-5 hoverable"
                textClassName="grey-text"
                title={symbl.CoinInfo.Name}
                actions={[
                  <a href={symbl.CoinInfo.url}>
                    TotalVolume 24H:<br />{' '}
                    {symbl.ConversionInfo.TotalVolume24H.toFixed(2)}
                  </a>
                ]}
                key={symbl.CoinInfo.Id}
              >
                {symbl.CoinInfo.FullName}
              </Card>
            </Col>
          );
        })}
      </div>
    </div>
  );
};
