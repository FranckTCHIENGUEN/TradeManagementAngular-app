/* tslint:disable */
/* eslint-disable */
import { DetailsBilan } from './details-bilan';
import { DetailsPaiement } from './details-paiement';
export interface BillanComptableDto {
  ancienneCommande?: DetailsPaiement;
  ancienneDepense?: DetailsPaiement;
  ca?: number;
  date?: string;
  depense?: number;
  detailsBilan?: Array<DetailsBilan>;
  nouvelleCommande?: DetailsPaiement;
  nouvelleDepense?: DetailsPaiement;
  rembourssement?: number;
  rembourssementDepense?: number;
  user?: string;
}
