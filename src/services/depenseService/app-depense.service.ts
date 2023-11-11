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
    return this.depenseService.findAll8();
  }

  findById (id:number):Observable<DepensesDto>{
    return this.depenseService.findById8({id:id});
  }

  delete (id:number){
    return this.depenseService.delete8({id:id});
  }
}
