import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  public holdUserDetails = new BehaviorSubject<any>(null);
  CastUserDetails = this.holdUserDetails.asObservable()
  
  constructor() { }
  
  HoldUserDetails(details) {
    this.holdUserDetails.next(details);
  }
}
