import $ from 'jquery';
import Rx from 'rxjs';
import {getSubscriber} from './utils/getSubscriber';

const source$ = new Rx.Observable(observer => {
  observer.next(1);
  observer.next(2);
  observer.next("hello");
  observer.next("world");
  observer.complete();
});

// source$
//   .first()
//   .subscribe(getSubscriber("first"));

// source$
//   .last()
//   .subscribe(getSubscriber("last"));
// source$
//   .single()
//   .subscribe(getSubscriber("single"));

// source$
//   .find(function (x, i, obs ) {
//     return x == 1;
//   })
//   .subscribe(getSubscriber("find"));


// source$
//   .findIndex(function (x, i, obs ) {
//     return x == "hello";
//   })
//   .subscribe(getSubscriber("findIndex"));

// source$
//   .take(3)
//   .subscribe(getSubscriber("take"));

// source$
//   .skip(2)
//   .subscribe(getSubscriber("skip"));

// const source2$ = Rx.Observable.range(1, 10);
//
// source2$
//   .skipWhile(i => i < 5)
//   .takeWhile(i => i < 9)
//   .subscribe(getSubscriber("skipWhile"));

Rx.Observable.interval(500)
  .skipUntil(Rx.Observable.timer(2000))
  .takeUntil(Rx.Observable.timer(8000))
  .subscribe(getSubscriber("skipUntil"))