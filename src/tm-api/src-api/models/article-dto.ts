/* tslint:disable */
/* eslint-disable */
import { CategoryDto } from './category-dto';
export interface ArticleDto {
  category?: CategoryDto;
  codeArticle?: string;
  description?: string;
  designation?: string;
  id?: number;
  idEntreprise?: number;
  photo?: string;
  prixunitaireht?: number;
  prixunitairettc?: number;
  quantite?: number;
  tauxtva?: number;
}
