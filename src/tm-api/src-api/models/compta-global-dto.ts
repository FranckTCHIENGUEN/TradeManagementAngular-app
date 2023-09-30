/* tslint:disable */
/* eslint-disable */
import { BillanComptableDto } from './billan-comptable-dto';
export interface ComptaGlobalDto {
  argentEnCaisse?: number;
  avance?: number;
  avanceDepense?: number;
  billanComptableDtos?: Array<BillanComptableDto>;
  ca?: number;
  depense?: number;
  rembourssement?: number;
  rembourssementDepense?: number;
  resteApayer?: number;
  resteApayerDepense?: number;
}
