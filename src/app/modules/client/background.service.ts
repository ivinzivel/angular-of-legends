import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackgroundService {

  private background = new Subject<object>()

  changeBackground(url) {

    this.background.next(url)
  
  }



  getBackgroundObservable(): Observable<any> {

    return this.background.asObservable()

  }

}
