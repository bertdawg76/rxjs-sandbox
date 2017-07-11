import $ from 'jquery';
import Rx from 'rxjs';
import {getSubscriber} from './utils/getSubscriber';

// Rx.Observable.of("hello")
//   .merge(Rx.Observable.of("world"))
//   .subscribe(getSubscriber("merge"));

// Rx.Observable.interval(2000)
//   .merge(Rx.Observable.interval(500))
//   .take(25)
//   .subscribe(getSubscriber("merge"));

//let source1$ = Rx.Observable.interval(2000).map(i => 'M1: ' + i);
//let source2$ = Rx.Observable.interval(500).map(i => 'M2: ' + i);
//
// Rx.Observable.merge(
//   source1$,
//   source2$
// ).take(25)
// .subscribe(getSubscriber("merge two"));

// Rx.Observable.range(0, 3)
//   .map(function (x) {
//     return Rx.Observable.range(0, 3);
//   })
//   .mergeAll()
//   .subscribe(getSubscriber("mergeAll"));

let source1$ = Rx.Observable.range(1, 5).map(i => 'source 1 '+i);
let source2$ = Rx.Observable.range(4, 8).map(i => 'source 2 '+i);

// Rx.Observable.concat(source1$, source2$)
//   .subscribe(getSubscriber("concat"));

// Rx.Observable.concat(source1$, source2$)
//   .subscribe(getSubscriber("concat"));

Rx.Observable.range(0, 3)
  .map(function (x) {
    return Rx.Observable.range(x, 3);
    
  })
  .concatAll()
  .subscribe(getSubscriber("concatAll"));
  
