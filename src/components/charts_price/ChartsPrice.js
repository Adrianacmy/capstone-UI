import React from 'react';

import { Tabs, Tab, Icon } from 'react-materialize';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';

import './ChartsPrice.css';
import welcome from '../../assets/images/welcome.png';

export default props => {
  const { topMovers } = props;
  console.log(topMovers);

  function getLocalSymbles() {
    let localSymbles = [];
    topMovers.map(mover => {
      return localSymbles.push(mover.CoinInfo.Name);
    });
    return localSymbles.slice(0, 10);
  }

  console.log(getLocalSymbles());

  // function fetchPriceData(url){
  //   if (!url){
  //     url = 'https://api.coindesk.com/v1/bpi/currentprice.json';
  //   }

  //   const res = await fetch(url);
  //   const data = await res.json();
  //   data.bpi.map( data => {
  //     data.bpi[date]
  //   })

  //   this.setState({
  //     // return array of ojbect
  //     data: Object.keys(data.bpi).map(date => {
  //       return {
  //         date,
  //         price: data.bpi[date]
  //       };
  //     })
  //   });
  // }

  function makeAChart(data) {
    return (
      <Sparklines data={data}>
        <SparklinesLine style={{ fill: 'none' }} />
        <SparklinesSpots />
      </Sparklines>
    );
  }

  function renderSymble(sym) {
    return (
      <tr>
        &nbsp;&nbsp;&nbsp;<td>{sym}</td>
        <td>chart</td>
        <td>
          {' '}
          <a className="btn-floating btn-small waves-effect waves-light orange">
            <i className="material-icons">add</i>
          </a>
        </td>
      </tr>
    );
  }

  return (
    <div id="charts">
      <div className="hide-on-med-and-up">
        <span className="title">Cryptocurrencies</span>
        <a href="#!" className="secondary-content">
          <i className="material-icons">more_horiz</i>
        </a>
      </div>

      <table className="highlight z-depth-3">
        <tbody>
          {getLocalSymbles().map(sym => {
            return renderSymble(sym);
          })}
        </tbody>
      </table>

      <Tabs className="tab-demo z-depth-1">
        <Tab title="Test 1">Test 1</Tab>
        <Tab title="Test 2" active>
          Test 2
        </Tab>
        <Tab title="Test 3">Test 3</Tab>
        <Tab title="Test 4">Test 4</Tab>
      </Tabs>
    </div>
  );
};
