import $ from 'jquery';
import Rx from 'rxjs';
import {getSubscriber} from '../utils/getSubscriber';

// Rx.Observable.interval(1000)
//   .take(10)
//   .map(v => v * v)
//   .subscribe(getSubscriber("map"));

// let names = ["bert", "camilla", "michael"];
//
// Rx.Observable.from(names)
//   .map(v => v.toUpperCase())
//   .subscribe(getSubscriber("name"));

// const input = $('#input');
// const length = $('#length');

// Rx.Observable.fromEvent(input, 'keyup')
//   .map(e => e.target.value)
//   .map(v => {
//     return {
//       value:v,
//       length: v.length
//     }
//   })
//   .subscribe(x => {
//     console.log(x);
//     length.text(x.value)
//   });

// function getGithubUser(username){
//   return $.ajax({
//     url: 'https://api.github.com/users/'+username+'?client_id=c5be06708d34d269302e&client_secret=af018065643adb2f42e11ed08644cfcd6a97217d',
//     dataType: 'jsonp'
//   }).promise();
// }
//
// Rx.Observable.fromPromise(getGithubUser('bradtraversy'))
//   .map(obj => obj.data)
//   .subscribe(user => {
//     console.log(user)
//   })

// Rx.Observable.interval(2000)
//   .take(5)
//   .mapTo("Hello World")
//   .subscribe(getSubscriber("mapto"))

// var arr = [
//   {value: 0},
//   {value: 1},
//   {value: 2}
// ];
//
// Rx.Observable.from(arr)
//   .pluck('value')
//   .subscribe(x => {
//     console.log(x);
//   });
//
// Rx.Observable.interval(500)
//   .buffer(Rx.Observable.interval(2000))
//   .subscribe(getSubscriber("buffer"))

// Rx.Observable.range(1, 100)
//   .bufferCount(20)
//   .subscribe(getSubscriber("buffercount"))

// Rx.Observable.interval(1000)
//   .bufferTime(2000)
//   .subscribe(getSubscriber("bufferTime"))
//
// const obs1$ = Rx.Observable.interval(1000);
// const obs2$ = Rx.Observable.fromEvent(document, 'click');
//
// const myBuffer = obs1$.buffer(obs2$);
// const subscribe = myBuffer.subscribe(getSubscriber("buffered values"));