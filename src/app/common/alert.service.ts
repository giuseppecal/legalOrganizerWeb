import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";
import {Response} from './response';

@Injectable()
export class AlertService {

  constructor() { }

  private messagge$: Subject<Response> = new Subject<Response>();

  public sendMessage(message: Response) {
    this.messagge$.next(message);
  }

  public receiveMessage(): Observable<Response> {
    return this.messagge$;
  }
}
