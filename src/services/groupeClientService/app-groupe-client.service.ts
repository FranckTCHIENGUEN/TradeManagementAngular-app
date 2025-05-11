import { Injectable } from '@angular/core';
import {GroupeClientService} from "../../tm-api/src-api/services/groupe-client.service";
import {GroupeClientDto} from "../../tm-api/src-api/models/groupe-client-dto";

@Injectable({
  providedIn: 'root'
})
export class AppGroupeClientService {

  constructor(private groupeClientService: GroupeClientService) { }

  saveGroupeClient(groupe: GroupeClientDto) {
    return this.groupeClientService.save5({body:groupe})
  }
  findAll(details: boolean) {
    return this.groupeClientService.findAll6({withDetails:details})
  }
  findByNom(nom: string) {
    return this.groupeClientService.findByName({nom:nom})
  }
  findById(id: number) {
    return this.groupeClientService.findById6({id:id})
  }
  add(idGroupe:number, idClient:Array<number>) {
    return this.groupeClientService.addClient({idGroupe:idGroupe, body:idClient})
  }
  remove(idGroupe:number, idClient:Array<number>) {
    return this.groupeClientService.removeClient({idGroupe:idGroupe, body:idClient})
  }
}
