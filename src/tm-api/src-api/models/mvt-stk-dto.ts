/* tslint:disable */
/* eslint-disable */
import { ArticleDto } from './article-dto';

/**
 * le type de mouvement accepté est ENTREE/SORTIE/CORRECTION_NEG/CORRECTION_POS
 */
export interface MvtStkDto {
  article?: ArticleDto;
  dateMvt?: string;
  id?: number;
  idEntreprise?: number;
  quantite?: number;
  sourceMvt?: 'VENTE' | 'COMMANDE_CLIENT' | 'COMMANDE_FOURNISSEUR';
  typeMvt?: 'ENTREE' | 'SORTIE' | 'CORRECTION_POS' | 'CORRECTION_NEG';
}
