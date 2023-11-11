import {Injectable} from '@angular/core';
import {ServiceService} from "../../tm-api/src-api/services/service.service";
import {Observable} from "rxjs";
import {ServiceDto} from "../../tm-api/src-api/models/service-dto";
import {StatServiceDto} from "../../tm-api/src-api/models/stat-service-dto";

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private serviceService:ServiceService) { }

  save (cat:ServiceDto):Observable<ServiceDto>{
    return this.serviceService.save2({body:cat});
  }

  findAll ():Observable<Array<StatServiceDto>>{
    return this.serviceService.findAll2();
  }

  findById (id:number):Observable<StatServiceDto>{
    return this.serviceService.findById2({id:id});
  }

  delete (id:number){
    return this.serviceService.delete2({idService:id});
  }
}
