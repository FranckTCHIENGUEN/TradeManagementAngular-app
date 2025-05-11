import {Injectable} from '@angular/core';
import {ClientService} from "../../tm-api/src-api/services/client.service";
import {ClientDto} from "../../tm-api/src-api/models/client-dto";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClientAppServiceService {

  constructor(private clientService:ClientService,) { }

  save(client:ClientDto):Observable<ClientDto>{
    return this.clientService.save10({body:client})
  }

  findAll():Observable<Array<ClientDto>>{
    return this.clientService.findAll12();
  }
  findById(id:number):Observable<ClientDto>{
    return this.clientService.findById12({id:id});
  }
  delete(id:number){
    return this.clientService.delete12({id:id})
  }
}
