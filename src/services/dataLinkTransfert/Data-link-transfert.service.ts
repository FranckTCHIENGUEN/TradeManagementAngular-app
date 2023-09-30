import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {UtilisateurDto} from "../../tm-api/src-api/models/utilisateur-dto";

@Injectable({
  providedIn: 'root'
})
export class DataLinkTransfertService {

  private nameSource = new BehaviorSubject<string>('');
  userConnected:UtilisateurDto = JSON.parse(sessionStorage.getItem('userData') as string) ;
  name = this.nameSource.asObservable()
  constructor() { }
  changeName(name: string) {
    this.nameSource.next(name);
  }
}
