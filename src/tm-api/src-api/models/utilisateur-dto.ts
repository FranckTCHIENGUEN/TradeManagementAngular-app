/* tslint:disable */
/* eslint-disable */
import { AdresseDto } from './adresse-dto';
import { ContactDto } from './contact-dto';
import { EntrepriseDto } from './entreprise-dto';
import { RoleDto } from './role-dto';
export interface UtilisateurDto {
  accountNonLocked?: boolean;
  adresse?: AdresseDto;
  contactDto?: ContactDto;
  dateNaissance?: string;
  email?: string;
  entreprise?: EntrepriseDto;
  genre?: 'MASCULIN' | 'FEMININ' | 'ENTREPRISE';
  id?: number;
  motdepasse?: string;
  nom?: string;
  passwordState?: 'DEFAULT' | 'PERSONAL';
  photo?: string;
  prenom?: string;
  roles?: Array<RoleDto>;
}
