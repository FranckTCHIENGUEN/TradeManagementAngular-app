/* tslint:disable */
/* eslint-disable */
import { CategorieDepenseDto } from './categorie-depense-dto';
export interface DepensesDto {
  categorieDepense?: CategorieDepenseDto;
  code?: string;
  dateDepense?: string;
  description?: string;
  id?: number;
  idEntreprise?: number;
  montantTotal?: number;
  nomArticle?: string;
  prixunitaire?: number;
  quantite?: number;
}
