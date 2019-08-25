import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatasetsharedServiceService  {
  private messageSource = new BehaviorSubject([Array]);
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message: any) {
    console.log('data changed ', message);

    this.messageSource.next(message);
  }


}
