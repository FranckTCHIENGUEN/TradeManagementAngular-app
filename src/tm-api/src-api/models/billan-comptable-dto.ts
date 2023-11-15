/* tslint:disable */
/* eslint-disable */
import { DetailsBilan } from './details-bilan';
export interface BillanComptableDto {
  argentEnCaisse?: number;
  avance?: number;
  avanceDepense?: number;
  ca?: number;
  date?: string;
  depense?: number;
  detailsBilan?: Array<DetailsBilan>;
  rembourssement?: number;
  rembourssementDepense?: number;
  resteApayer?: number;
  resteApayerDepense?: number;
  user?: string;
}
