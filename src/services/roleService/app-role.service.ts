import {Injectable} from '@angular/core';
import {RoleService} from "../../tm-api/src-api/services/role.service";
import {Observable} from "rxjs";
import {RoleDto} from "../../tm-api/src-api/models/role-dto";
import {Permissions} from "../../tm-api/src-api/models/permissions";

@Injectable({
  providedIn: 'root'
})
export class AppRoleService {

  constructor(private roleService:RoleService) { }

  findAll():Observable<Array<RoleDto>>{
    return this.roleService.findAll3();
  }
  findAllPermissions():Observable<Array<Permissions>>{
    return this.roleService.findAllPermissions();
  }

  save(user:RoleDto):Observable<RoleDto>{
    return this.roleService.save3({body:user});
  }

  delete(id:number){
    return this.roleService.delete3({id:id});
  }
}
