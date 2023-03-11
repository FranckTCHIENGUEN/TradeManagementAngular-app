import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataLinkTransfertService {

  private nameSource = new BehaviorSubject<string>('');
  // userConnected:UtilisateursDto = {};
  name = this.nameSource.asObservable()
  constructor() { }
  changeName(name: string) {
    this.nameSource.next(name);
  }
}
