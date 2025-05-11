import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {UtilisateurDto} from "../../../tm-api/src-api/models/utilisateur-dto";
import {AppCategorieDepenseService} from "../../../services/categorieDepenseService/app-categorie-depense.service";
import {AppCatergorieServiceService} from "../../../services/categoriService/app-catergorie-service.service";
import {AppCategorieProduitService} from "../../../services/categorieProduit/app-categorie-produit.service";
import {AppUserService} from "../../../services/appUserServices/app-user.service";
import {CategoriesSearchDto, ContextCategorie} from "../../../tm-api/src-api/models/categories-search-dto";

@Component({
  selector: 'app-filter-categories',
  templateUrl: './filter-categories.component.html',
  styleUrls: ['./filter-categories.component.scss']
})
export class FilterCategoriesComponent {

  saveForm = this.formBuilder.group({
    user:[undefined,[
    ]],
    cat:[undefined,
    ],
    date1:[undefined,[
    ]],
    date2:[undefined,[
    ]],
    nom:[undefined,
    ],
  })

  @Output() objetFiltre = new EventEmitter<CategoriesSearchDto>();
  @Input() typeEnregistrement: string | undefined;
  categories :any[]=[]
  user :UtilisateurDto[]=[]
  permission: Array<string> = [];
   utilisateurDto: UtilisateurDto = JSON.parse(sessionStorage.getItem("userData") as string);

  constructor(private formBuilder:FormBuilder,
              private categoriedepenseService:AppCategorieDepenseService,
              private catServiceService:AppCatergorieServiceService,
              private catProduitService:AppCategorieProduitService,
              private userService:AppUserService) {

    if (this.typeEnregistrement==ContextCategorie.PRODUIT){
      this.catProduitService.findAll().subscribe(
        value => {
          this.categories = value;
        }
      )
    }
    if (this.typeEnregistrement==ContextCategorie.DEPENSE){
      this.categoriedepenseService.findAll().subscribe(
        value => {
          this.categories = value;
        }
      )
    }
    if (this.typeEnregistrement==ContextCategorie.SERVICE){
      this.catServiceService.findAll().subscribe(
        value => {
          this.categories = value;
        }
      )
    }

    this.getPermissions();
    if (this.permission.includes('UTILISATEUR: LIRE') && this.permission.includes('DEPENSE: VOIR_TOUT')){
      this.userService.findAll().subscribe(value => {
        this.user = value;
      })
    }
  }

  private getPermissions(){

    this.utilisateurDto.roles?.forEach(role => {
      role.permissions?.forEach(perm => {
        this.permission?.push(perm.permisssion!);
      })
    })
  }

  formSubmit() {

    let person:any = this.saveForm.controls.user.value;
    let objet:CategoriesSearchDto={
      date1: this.saveForm.controls.date1.value ? new Date(new Date(this.saveForm.controls.date1.value as string).setHours(0, 0, 0, 0)).toISOString() : undefined ,
      date2: this.saveForm.controls.date2.value ? new Date(new Date(this.saveForm.controls.date2.value as string).setHours(23, 59, 59, 999)).toISOString() : undefined ,
      nom:this.saveForm.controls.nom.value as string | undefined,
      idCategorie:this.saveForm.controls.cat.value as number | undefined,
      createdBy:person ? person : this.utilisateurDto.nom+' '+this.utilisateurDto.prenom,
    }
    this.objetFiltre.emit(objet);
  }

  protected readonly ContextCategorie = ContextCategorie;
}
