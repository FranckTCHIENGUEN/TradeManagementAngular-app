import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {UtilisateurService} from "../../tm-api/src-api/services/utilisateur.service";
import {UtilisateurDto} from "../../tm-api/src-api/models/utilisateur-dto";

@Injectable({
  providedIn: 'root'
})
export class AppUserService {

  constructor(private userService:UtilisateurService) { }

  findByEmail(email:string):Observable<UtilisateurDto>{
    return this.userService.findByEmail({email: email});
  }
  findByEmailAndIdNot(email:string, id:number):Observable<UtilisateurDto>{
    return this.userService.findByEmailAndIdNot({email: email, id:id});
  }
  findByPassAndIdIs(email:string, id:number):Observable<UtilisateurDto>{
    return this.userService.findByPasswordAndIdIs({password: email, id:id});
  }

  findAll():Observable<Array<UtilisateurDto>>{
    return this.userService.findAll1();
  }

  addRoleToUser(idUser:number, idRole:number):Observable<UtilisateurDto>{
    return this.userService.addRoleToUser({idrole:idRole,iduser:idUser});
  }

  removeRoleToUser(idUser:number, idRole:number):Observable<UtilisateurDto>{
    return this.userService.removeRoleToUser({idrole:idRole,iduser:idUser});
  }

  delete(id:number){
    return this.userService.delete1({id:id});
  }

  save(user:UtilisateurDto):Observable<UtilisateurDto>{
    return this.userService.save1({body:user});
  }

  changeAcess(user:UtilisateurDto):Observable<UtilisateurDto>{
    return this.userService.changeAccess({body:user});
  }

  renewPass(user:UtilisateurDto):Observable<UtilisateurDto>{
    return this.userService.reinitializePass({body:user});
  }
}
