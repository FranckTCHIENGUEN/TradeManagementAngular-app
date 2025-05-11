import {Injectable} from '@angular/core';
import {DepenseService} from "../../tm-api/src-api/services/depense.service";
import {Observable} from "rxjs";
import {DepensesDto} from "../../tm-api/src-api/models/depenses-dto";

@Injectable({
  providedIn: 'root'
})
export class AppDepenseService {

  constructor(private depenseService:DepenseService) { }

  saveAll (cat:Array<DepensesDto>):Observable<Array<DepensesDto>>{
    return this.depenseService.saveAll2({body:cat});
  }

  findAll ():Observable<Array<DepensesDto>>{
    return this.depenseService.findAll9();
  }

  findById (id:number):Observable<DepensesDto>{
    return this.depenseService.findById9({id:id});
  }

  findByDateBetweenAndUser (date1:string, date2:string, user:string):Observable<Array<DepensesDto>>{
    return this.depenseService.findByDateDepenseBetweenAndUser({date1:date1, date2:date2, user:user});
  }

  findByDateBetween (date1:string, date2:string):Observable<Array<DepensesDto>>{
    return this.depenseService.findByDateDepenseBetween({date1:date1, date2:date2});
  }

  delete (id:number){
    return this.depenseService.delete9({id:id});
  }
}
