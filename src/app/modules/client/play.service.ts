import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayService {

  constructor() { }

  private inQueue = new Subject<boolean>()
  private inLobby = new Subject<boolean>()

  changeQueueState(url) {

    this.inQueue.next(url)
  
  }



  getQueueObservable(): Observable<any> {

    return this.inQueue.asObservable()

  }



  changeLobbyState(url) {

    this.inLobby.next(url)
  
  }



  getLobbyObservable(): Observable<any> {

    return this.inLobby.asObservable()

  }
  
}
