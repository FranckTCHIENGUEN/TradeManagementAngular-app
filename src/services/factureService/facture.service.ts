import {Injectable} from '@angular/core';
import {BillService} from "../../tm-api/src-api/services/bill.service";

@Injectable({
  providedIn: 'root'
})
export class FactureService {

  // private apiUrl = 'http://localhost:9090/tradeManagement/v1/bill'; // URL de l'API Spring Boot

  constructor(private billService:BillService) {}

  // Récupérer le PDF sous forme de blob
  downloadFacture(id: number) {
    return this.billService.generatePdf({idCommande:id});
  }
}
