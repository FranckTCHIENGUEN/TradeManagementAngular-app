/* tslint:disable */
/* eslint-disable */
import { UtilisateurDto } from './utilisateur-dto';
export interface AuthentificationResponse {
  accessToken?: string;
  refreshToken?: string;
  user?: UtilisateurDto;
}
