/* tslint:disable */
/* eslint-disable */
import {ClientDto} from './client-dto';
import {LigneVenteDto} from './ligne-vente-dto';
import {PaiementDto} from './paiement-dto';

export interface VenteDto {
  avance?: number;
  client?: ClientDto;
  code?: string;
  commentaire?: string;
  datevente?: string;
  id?: number;
  idEntreprise?: number;
  ligneVentes?: Array<LigneVenteDto>;
  montantTotal?: number;
  paiementDtoList?: Array<PaiementDto>;
  resteAdonner?: number;
  resteApayer?: number;
}
