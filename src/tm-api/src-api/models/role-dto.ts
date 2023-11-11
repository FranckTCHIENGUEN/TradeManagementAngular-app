/* tslint:disable */
/* eslint-disable */
import {Permissions} from './permissions';

export interface RoleDto {
  id?: number;
  idEntreprise?: number;
  permissions?: Array<Permissions>;
  roleName?: string;
}
