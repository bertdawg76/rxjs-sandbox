import $ from 'jquery';
import Rx from 'rxjs';
import {getSubscriber} from '../utils/getSubscriber';

// Rx.Observable.range(0, 10)
//   .filter(function (x, i, obs) {
//     return x >= 5;
//   })
//   .subscribe(getSubscriber("filter"));

// Rx.Observable.range(0, 10)
//   .filter(function (x, i, obs) {
//     return x % 2 === 0;
//   })
//   .subscribe(getSubscriber("filter"));

let input = $('#sku');
let output = $('#output');

// let products = [
//   {sku:"001", name: "red t-shirt", price: 4.99},
//   {sku:"002", name: "blue pants", price: 9.99},
//   {sku:"003", name: "green hat", price: 7.99},
//   {sku:"003", name: "yellow t-shirt", price: 4.99},
// ];
//
// Rx.Observable.fromEvent(input, 'keyup')
//   .map(e => e.target.value)
//   .subscribe(x => {
//     Rx.Observable.from(products)
//       .filter(i => i.sku == x)
//       .subscribe(x => {
//         output.html('<h1>'+x.name+'</h1><h3>$'+x.price+'</h3>')
//       })
//   })
//
// Rx.Observable.from(products)
//   .filter(i => i.price < 5)
//   .subscribe(x => {
//     console.log(x)
//   })

// Rx.Observable.fromEvent(input, 'keyup')
//   .map(e => e.target.value )
//   .distinct()
//   //.debounceTime(2000)
//   .subscribe(getSubscriber("debounce"));

Rx.Observable.of(23,23,55,43,67,55,44,43,23)
  .distinctUntilChanged()
  .subscribe(getSubscriber("distinct"));