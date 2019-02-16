import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoaderServiceService {
  showLoader: boolean;
  private loaderSubject = new Subject<boolean>();
  loaderState = this.loaderSubject.asObservable();
  constructor() { }
  show() {
    this.loaderSubject.next(this.showLoader= true);
  }
  hide() {
    this.loaderSubject.next(this.showLoader=false);
  }
}
