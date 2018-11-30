import { Component, OnInit } from '@angular/core';
import { Observable, timer, interval, Subject } from 'rxjs';
import { share, buffer, bufferCount, take, switchMap, tap, exhaustMap, distinctUntilChanged, debounceTime, delay } from 'rxjs/operators';

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('fire promise resolve');
//     resolve('resolve promise after 1s');
//   }, 1000);

  // on error
  // reject('my error instance here');
// });
// of(1);
const of1$ = Observable.create(observer => {
  observer.next(1);
  observer.complete();
});

const myObservable = Observable.create(observer => {
  setTimeout(() => {
    console.log('fire observable next');
    observer.next('fire event after 1s');
    observer.complete();
  }, 1000);
});
// 1
// myObservable.subscribe(v => console.log('sub 1', v));
// myObservable.subscribe(v => console.log('sub 2', v));

// const shared = myObservable.pipe(share());
// shared.subscribe(v => console.log('sub shared 1', v));

// 2
const timer$: Observable<number> = Observable.create(observer => {
  console.log('create timer');
  let count = 0;
  const sub = setInterval(() => {
    count++;
    observer.next(count);
    // if (count < 2) {
    //   observer.error('test error');
    // }
    if (count > 2) {
      observer.complete();
    }
  }, 1000);

  return () => {
    console.log('timer cleaning');
    clearInterval(sub);
  };
});

// const subscription = timer$.subscribe(
//   v => console.log('sub 1', v),
//   err => console.log('sub 1 err', err),
//   () => console.log('sub 1 complete')
// );

// setTimeout(() => {
//   subscription.unsubscribe();
// }, 2222);

// buffer
// http://rxmarbles.com/#buffer
// https://www.learnrxjs.io/operators/transformation/buffer.html

const mouseMoves$ = interval(50);
const bufferTime$ = interval(150);
const buffer$ = mouseMoves$.pipe(
  buffer(bufferTime$),
  // bufferCount(3),
  take(5)
);
// buffer$.subscribe(v => console.log('buffer', v));

// switch map
const click$ = new Subject();

const messages$ = interval(500).pipe(take(6));

const data$ = click$.pipe(
  debounceTime(1000),
  delay(300),
  // distinctUntilChanged(),
  switchMap((n) => {
    console.log('n', n);
    return messages$;
  }),

  // exhaustMap(v => messages$)
  // tap(v => console.log('v', v))
);
data$.subscribe(v => console.log('data', v));

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent {

  roles = ['admin', 'user'];

  action1() {
    click$.next('click event');
  }
  action2() {
    // click$.next('click event 2');
    this.roles = ['admin'];
  }

}
