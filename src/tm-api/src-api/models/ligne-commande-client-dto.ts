/* tslint:disable */
/* eslint-disable */
import { ArticleDto } from './article-dto';
import { StatServiceDto } from './stat-service-dto';
export interface LigneCommandeClientDto {
  article?: ArticleDto;
  description?: string;
  id?: number;
  idEntreprise?: number;
  idType?: number;
  object?: {
};
  prixTotal?: number;
  prixunitaire?: number;
  quantite?: number;
  service?: StatServiceDto;
  type?: 'PRODUIT' | 'SERVICE' | 'MATERIEL';
}
