/* tslint:disable */
/* eslint-disable */
import { AdresseDto } from './adresse-dto';
import { ContactDto } from './contact-dto';
export interface EntrepriseDto {
  adresse?: AdresseDto;
  codeFiscal?: string;
  contact?: ContactDto;
  description?: string;
  email?: string;
  id?: number;
  nom?: string;
  photo?: string;
  siteWeb?: string;
}
