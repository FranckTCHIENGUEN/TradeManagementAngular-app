/* tslint:disable */
/* eslint-disable */
export interface PaiementDto {
  comptePayeur?: string;
  datepaiement?: string;
  id?: number;
  idClient?: number;
  idEntreprise?: number;
  idObjet?: number;
  mode?: 'MOBILE_MONNEY' | 'ORANGE_MONNEY' | 'REMBOURSSEMENT' | 'ESPECE';
  montant?: number;
  objet?: 'CC' | 'CC_OLD' | 'CF_OLD' | 'CF' | 'VENTE' | 'DEPENSE';
  ref?: string;
  resteAdonner?: number;
  resteApayer?: number;
}
