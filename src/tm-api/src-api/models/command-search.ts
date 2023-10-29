/* tslint:disable */
/* eslint-disable */
export interface CommandSearch {
  avance?: number;
  code?: string;
  dateLivraison1?: string;
  dateLivraison2?: string;
  dateRetrait1?: string;
  dateRetrait2?: string;
  datecommande1?: string;
  datecommande2?: string;
  etatCommande?: 'EN_PREPARATION' | 'RECEPTIONNER' | 'VALIDER' | 'LIVRER';
  idClient?: number;
  montantTotal?: number;
  resteAdonner?: number;
  resteApayer?: number;
}
