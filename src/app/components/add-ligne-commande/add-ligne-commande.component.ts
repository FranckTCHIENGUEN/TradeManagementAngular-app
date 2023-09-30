import {Component, Inject} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {DataLinkTransfertService} from "../../../services/dataLinkTransfert/Data-link-transfert.service";
import {
  AppCommandFournisseurService
} from "../../../services/commandFournisseurService/app-command-fournisseur.service";
import {AppCommandClientService} from "../../../services/commandClientService/app-command-client.service";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {map, Observable} from "rxjs";
import {ArticleDto} from "../../../tm-api/src-api/models/article-dto";
import {StatServiceDto} from "../../../tm-api/src-api/models/stat-service-dto";
import {AppServiceService} from "../../../services/serviceService/app-service.service";
import {AppProductService} from "../../../services/productService/app-product.service";
import {SaveServiceDialogComponent} from "../save-service-dialog/save-service-dialog.component";
import {SaveProductDialogComponent} from "../save-product-dialog/save-product-dialog.component";
import {UtilisateurDto} from "../../../tm-api/src-api/models/utilisateur-dto";
import {LigneVenteDto} from "../../../tm-api/src-api/models/ligne-vente-dto";

@Component({
  selector: 'app-add-ligne-commande',
  templateUrl: './add-ligne-commande.component.html',
  styleUrls: ['./add-ligne-commande.component.scss']
})
export class AddLigneCommandeComponent {
  saveForm= this.formBuilder.group({
    objet: ['', Validators.required],
    description: ['',],
    quantite: [0,],
    type:['',[
      Validators.required
    ]],
    prixUnitaire: [0, Validators.required],
    prixTotal: [0, Validators.required],
  });
  private _type?: string;
  private donnees: any;
  filteredElement: Observable<ArticleDto[]> | undefined;
  filteredElement2: Observable<StatServiceDto[]> | undefined;

  constructor(private formBuilder:FormBuilder,
              private dataLinkTransfert:DataLinkTransfertService,
              private comFournisseurService:AppCommandFournisseurService,
              private comClientService:AppCommandClientService,
              private serviceService:AppServiceService,
              private produitService:AppProductService,
              private dialog: MatDialog,
              private dialogRef: MatDialogRef<AddLigneCommandeComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any) {

    if (this.data !=null){
      this._type = this.data._type;
      this.donnees = this.data.idCommande;
    }

  }


  get type(): string {
    return <string>this._type;
  }

  set type(value: string) {
    this._type = value;
  }

  displayFnElement(user: any): string {
    let nom = user.designation
    return user && nom ? nom : '';
  }

  displayFnElementService(user: StatServiceDto): string {
    let nom = user.serviceDto?.nom
    return user && nom ? nom : '';
  }

  private _filterElementService(name: string): Observable<StatServiceDto[]> {
    // const filterValue = name.toLowerCase();


    return this.serviceService.findAll().pipe(map(response => response.filter(option => {
      return option.serviceDto?.nom?.toLowerCase().indexOf(name.toLowerCase()) === 0
    })))


  }

  manageChangeFilter(){
    if (this.saveForm.controls.type?.value == "SERVICE"){
      this.filteredElement2 = this._filterElementService(this.saveForm.controls.objet.value as string);
    }
    if (this.saveForm.controls.type.value == "PRODUIT"){
      this.filteredElement = this._filterElement(this.saveForm.controls.objet?.value as string);
    }
  }

  private _filterElement(name: string): Observable<ArticleDto[]> {
    // const filterValue = name.toLowerCase();


    return this.produitService.findAll().pipe(map(response => response.filter(option => {
      return option.designation?.toLowerCase().indexOf(name.toLowerCase()) === 0
    })))


  }

  calculmontant() {
    this.saveForm.controls.prixTotal?.patchValue(
      this.saveForm.controls.quantite?.value as number * (this.saveForm.controls.prixUnitaire?.value as number) as number
    )
  }

  nouveau() {
    if (this.saveForm.controls.type.value == "SERVICE"){
      this.dialog.open(SaveServiceDialogComponent, {
        height: '75%',
        width: '90%',
        disableClose:false,
        data: {

        },
      }).afterClosed().subscribe(
        data => {
          if (data=="ok"){

            // this.ngOnInit();
          }
        }
      );
    }
    if (this.saveForm.controls.type.value== "PRODUIT"){
      this.dialog.open(SaveProductDialogComponent, {
        height: '75%',
        width: '90%',
        disableClose:false,
        data: {

        },
      }).afterClosed().subscribe(
        data => {
          if (data=="ok"){

            // this.ngOnInit();
          }
        }
      );
    }
  }

  formSubmit() {

    // if (!this.saveForm.valid) {
    //   console.log('Please provide all the required values!')
    //
    // }
    // else {
    //   let userConnected: UtilisateurDto = JSON.parse(sessionStorage.getItem('userData') as string);
    //   let ele :Array<LigneVenteDto> = [];
    //
    //   for (let i = 0; i < this.ligneCom.length; i++) {
    //     const object : any = this.ligneCom.at(i).get('objet')?.value
    //
    //     const lig:LigneVenteDto = {
    //       idEntreprise : userConnected.entreprise?.id,
    //       idType :object.id,
    //       type : this.ligneCom.at(i).get('type')?.value,
    //       prixTotal : this.ligneCom.at(i).get('prixTotal')?.value as number,
    //       quantite : this.ligneCom.at(i).get('quantite')?.value as number,
    //       prixunitaire : this.ligneCom.at(i).get('prixUnitaire')?.value as number,
    //       description : this.ligneCom.at(i).get('description')?.value as string
    //     };
    //
    //     ele.push(lig)
    //   }
    // }
  }
}
