import React from 'react';

import { Tabs, Tab } from 'react-materialize';

export default class TiemPeriod extends React.Component {
  state = {
    data: null
  };

  // async componentDidMount() {
  //   const res = await fetch(
  //     'https://api.coindesk.com/v1/bpi/historical/close.json'
  //   );
  //   const data = await res.json();

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

  render() {
    return (
      <Tabs
        className="z-depth-1 indigo darken-4 white-text"
        onChange={this.props.onHandleTabClick}
      >
        <Tab title="1M" active value="histominute" />
        <Tab title="1H" value="histohour" />
        <Tab title="1D" value="histoday" />
      </Tabs>
    );
  }
}
