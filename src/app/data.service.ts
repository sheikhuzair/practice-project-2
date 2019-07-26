import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {
 // private goals = new  BehaviorSubject<any>(['The initial goal', 'Another silly life goal']);

  constructor() { }
  ChangeGoal() {
   // this.goals.next(this.goal);
  }
}
