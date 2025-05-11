/* tslint:disable */
/* eslint-disable */
export interface CategoriesSearchDto {
  createdBy?: string;
  date1?: string;
  date2?: string;
  idCategorie?: number;
  nom?: string;
  quantite?: number;
}

export enum ContextCategorie{
  PRODUIT="produit",
  DEPENSE="depense",
  SERVICE="service",
}
