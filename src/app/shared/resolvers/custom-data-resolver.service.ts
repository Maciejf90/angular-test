import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { of, Observable, throwError } from 'rxjs';
import { delay, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomDataResolverService implements Resolve<string> {

  constructor() {
    console.log('RESOLVER')
   }

  resolve(): Observable<string> {
    return of('resolved custom data').pipe(
      delay(2000),
      // switchMap(() => throwError('resolver error'))
    );
  }
}
