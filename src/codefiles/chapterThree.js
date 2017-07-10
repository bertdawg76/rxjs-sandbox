import $ from 'jquery';
import Rx from 'rxjs';
import {getSubscriber} from '../utils/getSubscriber';

var nums = [22, 56, 75, 4, 35, 89, 554, 90];
//
// var num$ = Rx.Observable.from(nums);
//
// num$.subscribe(getSubscriber('nums'));

// const source$ = new Rx.Observable(observer => {
//   console.log('creating observable');
//
//   observer.next('a value');
//   observer.next('another value');
//   //observer.error(new Error('something wrong'));
//
//   setTimeout(() => {
//     observer.next('hello World');
//     observer.next(nums);
//     observer.complete();
//   }, 2000);
//
//
// });
//
// source$.subscribe(getSubscriber('myObs'));

// const source$ = Rx.Observable.create(observer => {
//   observer.next(Date.now());
// }).publish();
//
// source$.subscribe(getSubscriber('one'));
// source$.subscribe(getSubscriber('two'));
//
// source$.connect();

// const source$ = Rx.Observable
//   .interval(1000)
//   .publish();
//
// source$.connect();
//
// setTimeout(() => {
//   source$.subscribe(getSubscriber("one"));
//   setTimeout(() => {
//     source$.subscribe(getSubscriber("two"))
//   }, 4000)
// }, 2000);

// const source$ = Rx.Observable
//   .interval(1000)
//   .publish()
//   .refCount();
//
//
// setTimeout(() => {
//   source$.subscribe(getSubscriber("one"));
//   setTimeout(() => {
//     source$.subscribe(getSubscriber("two"))
//   }, 4000)
// }, 2000);

// const source$ = Rx.Observable.interval(200)
//   .take(10)
//   .subscribe(getSubscriber('interval'));

// const source$ = Rx.Observable.timer(3000, 1000)
//   .take(10)
//   .subscribe(getSubscriber('timer'));
// const source$ = Rx.Observable.range(0, 20)
//   .subscribe(getSubscriber('range'));

// const source$ = Rx.Observable.of(nums)
//   .subscribe(getSubscriber('of'));

// let i = 0;
// const source$ = Rx.Observable.defer(() => {
//   i++;
//   return Rx.Observable.of(i);
// });
//
// source$.subscribe(getSubscriber('one'));
// source$.subscribe(getSubscriber('two'));
// source$.subscribe(getSubscriber('three'));

// const myPromise = new Promise((resolve, reject) => {
//   console.log('creating promise');
//   setTimeout(() => {
//     console.log('something');
//     resolve('hello from promise');
//   }, 2000)
// });

// myPromise.then(x => {
//   console.log(x);
// });

// Rx.Observable.fromPromise(myPromise)
//   .subscribe(getSubscriber('promise'));

let input = $('#input');
let profile = $('#profile');
profile.hide();

Rx.Observable.fromEvent(input, 'keyup')
  .subscribe(e => {
    profile.show();
    Rx.Observable.fromPromise(getGithubUser(e.target.value))
      .subscribe(user => {
        $('#name').text(user.data.name);
        $('#login').text(user.data.login);
        $('#blog').text(user.data.blog);
        $('#avatar').attr('src', user.data.avatar_url);
        $('#repos').text(user.data.public_repos);
        $('#followers').text(user.data.followers);
        $('#following').text(user.data.following);
        $('#link').attr('href', user.data.html_url);
      })
  });

// Rx.Observable.fromPromise(getGithubUser('bradtraversy'))
//   .subscribe(user => {
//     console.log(user.data.name);
//     $('#name').text(user.data.name);
//     $('#login').text(user.data.login);
//     $('#blog').text(user.data.blog);
//     $('#avatar').attr('src', user.data.avatar_url);
//     $('#repos').text(user.data.public_repos);
//     $('#followers').text(user.data.followers);
//     $('#following').text(user.data.following);
//     $('#link').attr('href', user.data.html_url);
//   });

function getGithubUser(username){
  return $.ajax({
    url: 'https://api.github.com/users/'+username+'?client_id=c5be06708d34d269302e&client_secret=af018065643adb2f42e11ed08644cfcd6a97217d',
    dataType: 'jsonp'
  }).promise();
}