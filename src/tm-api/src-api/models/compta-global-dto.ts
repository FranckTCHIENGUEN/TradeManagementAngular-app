/* tslint:disable */
/* eslint-disable */
import { BillanComptableDto } from './billan-comptable-dto';
export interface ComptaGlobalDto {
  billanComptableDtos?: Array<BillanComptableDto>;
  ca?: number;
  depense?: number;
  depenseEffective?: number;
  encaissementCommande?: number;
  rembourssement?: number;
  rembourssementDepense?: number;
  resteApayer?: number;
  resteApayerDepense?: number;
}
