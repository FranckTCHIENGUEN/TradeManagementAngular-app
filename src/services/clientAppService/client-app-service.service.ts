import { Injectable } from '@angular/core';
import {ClientService} from "../../tm-api/src-api/services/client.service";
import {ClientDto} from "../../tm-api/src-api/models/client-dto";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClientAppServiceService {

  constructor(private clientService:ClientService,) { }

  save(client:ClientDto):Observable<ClientDto>{
    return this.clientService.save9({body:client})
  }

  findAll():Observable<Array<ClientDto>>{
    return this.clientService.findAll11();
  }
  findById(id:number):Observable<ClientDto>{
    return this.clientService.findById11({id:id});
  }
  delete(id:number){
    return this.clientService.delete11({id:id})
  }
}
