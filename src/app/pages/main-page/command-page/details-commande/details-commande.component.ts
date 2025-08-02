import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-details-commande',
  templateUrl: './details-commande.component.html',
  styleUrls: ['./details-commande.component.scss']
})
export class DetailsCommandeComponent {
  type: any;
  donnees: any;
  constructor(private router: Router) {

    console.log(this.router.getCurrentNavigation()?.extras)
    this.donnees = this.router.getCurrentNavigation()?.extras.state?.['donnees'];
    this.type = this.router.getCurrentNavigation()?.extras.state?.['type'];
  }
}
