/* tslint:disable */
/* eslint-disable */
export interface LigneCommandeFournisseurDto {
  description?: string;
  id?: number;
  idEntreprise?: number;
  idType?: number;
  object?: {
};
  prixTotal?: number;
  prixunitaire?: number;
  quantite?: number;
  type?: 'PRODUIT' | 'SERVICE' | 'MATERIEL';
}
