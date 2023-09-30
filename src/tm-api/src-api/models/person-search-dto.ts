/* tslint:disable */
/* eslint-disable */
import { AdresseDto } from './adresse-dto';
import { CompteClientDto } from './compte-client-dto';
export interface PersonSearchDto {
  adresse?: AdresseDto;
  compteClientDto?: CompteClientDto;
  mail?: string;
  nom?: string;
  prenom?: string;
  tel?: string;
}
