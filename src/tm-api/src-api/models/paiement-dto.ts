/* tslint:disable */
/* eslint-disable */
export interface PaiementDto {
  comptePayeur?: string;
  datepaiement?: string;
  id?: number;
  idEntreprise?: number;
  idObjet?: number;
  mode?: 'MOBILE_MONNEY' | 'ORANGE_MONNEY' | 'REMBOURSSEMENT' | 'ESPECE';
  montant?: number;
  objet?: 'CC' | 'CF' | 'VENTE' | 'DEPENSE';
  ref?: string;
  resteAdonner?: number;
  resteApayer?: number;
}
