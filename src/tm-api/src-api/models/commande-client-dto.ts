/* tslint:disable */
/* eslint-disable */
import { ClientDto } from './client-dto';
import { LigneCommandeClientDto } from './ligne-commande-client-dto';
import { PaiementDto } from './paiement-dto';
export interface CommandeClientDto {
  avance?: number;
  client?: ClientDto;
  code?: string;
  commande?: boolean;
  dateLivraison?: string;
  dateRetrait?: string;
  datecommande?: string;
  etatCommande?: 'EN_PREPARATION' | 'RECEPTIONER' | 'VALIDER' | 'LIVRER';
  id?: number;
  idEntreprise?: number;
  ligneCommandeClients?: Array<LigneCommandeClientDto>;
  montantTotal?: number;
  paiementDtoList?: Array<PaiementDto>;
  resteAdonner?: number;
  resteApayer?: number;
}
