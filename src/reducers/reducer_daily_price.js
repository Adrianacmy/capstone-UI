import { DAILY_PRICE } from '../actions';
import moment from 'moment';

export default function(state = [], action) {
  // function formatData(bitcoinData) {
  //   const sortedData = [];
  //   let count = 0;
  //   for (let date in bitcoinData.bpi) {
  //     sortedData.push({
  //       d: moment(date).format('MMM DD'),
  //       p: bitcoinData.bpi[date].toLocaleString('us-EN', {
  //         style: 'currency',
  //         currency: 'USD'
  //       }),
  //       x: count, //previous days
  //       y: bitcoinData.bpi[date] // numerical price
  //     });
  //     count++;
  //   }
  //   return sortedData;
  // }

  // function formData(data){
  //   const storedData = {};
  // }
  switch (action.type) {
    case DAILY_PRICE:
      // console.log(action.payload);
      return [...state, { [action.sym]: action.payload.data.Data }];
    default:
      return state;
  }
}
