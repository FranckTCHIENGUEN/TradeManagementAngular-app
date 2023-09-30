/* tslint:disable */
/* eslint-disable */
import { AdresseDto } from './adresse-dto';
import { ContactDto } from './contact-dto';
export interface FournisseurDto {
  adresse?: AdresseDto;
  contactDto?: ContactDto;
  genre?: 'MASCULIN' | 'FEMININ' | 'ENTREPRISE';
  id?: number;
  idEntreprise?: number;
  mail?: string;
  nom?: string;
  photo?: string;
  prenom?: string;
}
