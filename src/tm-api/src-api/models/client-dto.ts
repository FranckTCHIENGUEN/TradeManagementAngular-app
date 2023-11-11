/* tslint:disable */
/* eslint-disable */
import {AdresseDto} from './adresse-dto';
import {CompteClientDto} from './compte-client-dto';
import {ContactDto} from './contact-dto';

export interface ClientDto {
  adresse?: AdresseDto;
  compteClientDto?: CompteClientDto;
  contactDto?: ContactDto;
  genre?: 'MASCULIN' | 'FEMININ' | 'ENTREPRISE';
  id?: number;
  idEntreprise?: number;
  mail?: string;
  nom?: string;
  photo?: string;
  prenom?: string;
}
