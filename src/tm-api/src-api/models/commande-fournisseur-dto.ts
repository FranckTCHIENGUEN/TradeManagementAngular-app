/* tslint:disable */
/* eslint-disable */
import { FournisseurDto } from './fournisseur-dto';
import { LigneCommandeFournisseurDto } from './ligne-commande-fournisseur-dto';
import { PaiementDto } from './paiement-dto';
export interface CommandeFournisseurDto {
  avance?: number;
  code?: string;
  commande?: boolean;
  dateLivraison?: string;
  dateRetrait?: string;
  datecommande?: string;
  etatCommande?: 'EN_PREPARATION' | 'RECEPTIONER' | 'VALIDER' | 'LIVRER';
  fournisseur?: FournisseurDto;
  id?: number;
  idEntreprise?: number;
  ligneCommandeFournisseurs?: Array<LigneCommandeFournisseurDto>;
  montantTotal?: number;
  paiementDtoList?: Array<PaiementDto>;
  resteAdonner?: number;
  resteApayer?: number;
}
