import { from, Observable } from "rxjs";

export function toObservable<T>(promise: Promise<T>): Observable<T> {
  return from(promise);
}

export function toPromise<T>(observable: Observable<T>): Promise<T> {
  return observable.toPromise();
}
