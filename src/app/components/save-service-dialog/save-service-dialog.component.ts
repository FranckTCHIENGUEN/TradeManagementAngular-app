import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, Validators} from "@angular/forms";
import {ArticleDto} from "../../../tm-api/src-api/models/article-dto";
import {MyErrorStateMatcher} from "../../ErrorMatcher";
import {DataLinkTransfertService} from "../../../services/dataLinkTransfert/Data-link-transfert.service";
import {UtilisateurDto} from "../../../tm-api/src-api/models/utilisateur-dto";
import {ConfirmDialogComponent} from "../confirm-dialog/confirm-dialog.component";
import {AddCategorieDialogComponent} from "../add-categorie-dialog/add-categorie-dialog.component";
import {SavePersonDialogComponent} from "../save-person-dialog/save-person-dialog.component";
import {ConfirmDeleteDialogComponent} from "../confirm-delete-dialog/confirm-delete-dialog.component";
import {ServiceDto} from "../../../tm-api/src-api/models/service-dto";
import {CategoriServiceDto} from "../../../tm-api/src-api/models/categori-service-dto";
import {AppServiceService} from "../../../services/serviceService/app-service.service";
import {AppCatergorieServiceService} from "../../../services/categoriService/app-catergorie-service.service";

@Component({
    selector: 'app-save-service-dialog',
    templateUrl: './save-service-dialog.component.html',
    styleUrls: ['./save-service-dialog.component.scss'],
    standalone: false
})
export class SaveServiceDialogComponent implements OnInit{

  service:ServiceDto = {};
  private _matcher = new MyErrorStateMatcher();
  categories: Array<CategoriServiceDto> =[];
  permission: Array<string> = [];
  saveForm = this.formBuilder.group({
    nom:[this.service.nom,[
      Validators.required
    ]],
    categorie:[this.service.category,[
      Validators.required
    ]],
    photo:[this.service.photo,],
  })


  constructor(private formBuilder:FormBuilder,
              private serviceService:AppServiceService,
              private catServiceService:AppCatergorieServiceService,
              private dataLinkTransfert:DataLinkTransfertService,
              private dialog: MatDialog,
              private dialogRef: MatDialogRef<SaveServiceDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private data: ArticleDto) {
    this.getPermissions();
    if (this.data != null){
      this.service = this.data;
      this.saveForm.patchValue(this.service)
      this.saveForm.controls.nom.setValue(this.service.nom);
      this.saveForm.controls.photo.setValue(this.service.photo);
      this.saveForm.controls.categorie.setValue(this.service.category);
    }
  }

  private getPermissions(){
    let utilisateurDto: UtilisateurDto = JSON.parse(sessionStorage.getItem("userData") as string);
    utilisateurDto.roles?.forEach(role => {
      role.permissions?.forEach(perm => {
        this.permission?.push(perm.permisssion!);
      })
    })
  }
  get matcher(): MyErrorStateMatcher {
    return this._matcher;
  }

  closeDialog(p: { etat: string, data:any|null }) {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.findAllCatProduit();
  }

  formSubmit() {

    if(this.saveForm.valid){
      let userConnected: UtilisateurDto = JSON.parse(sessionStorage.getItem('userData') as string);
      this.service.idEntreprise = userConnected.entreprise?.id;
      this.service.photo=  "https://res.cloudinary.com/dal83zeal/image/upload/v1695476070/TradeManagement-DefaultPicture/vrej29fadxug1azatfg9.png";
      this.service.category = this.saveForm.controls.categorie.value as CategoriServiceDto;
      this.service.nom = this.saveForm.controls.nom.value as string;

      this.serviceService.save(this.service).subscribe(
        value => {
          this.closeDialog({etat :'ok', data:value});
          this.dialog.open(ConfirmDialogComponent, {
            disableClose:false,
            data: {
              message: "Service "+ this.service.nom + " enregisgré avec succé",
            },
          });
        }
      )
    }
    else {
      this.dialog.open(ConfirmDialogComponent, {
        disableClose:false,
        data: {
          message: "Le formulaire contient des erreurs",
        },
      });
    }

  }

  nouvelleCategorie() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '50%';
    dialogConfig.width = '50%';

    dialogConfig.data= {
      typecat:"service"
    };

    this.dialog.open(AddCategorieDialogComponent, dialogConfig);

    const dialogRef = this.dialog.open(AddCategorieDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        if (data=="ok"){

          this.categories.push(data.data)
          console.log(this.categories)
        }
      }
    );
    dialogRef.close();
  }

  openDialogEditCat(cat: any) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '25%';
    dialogConfig.width = '50%';

    dialogConfig.data= {
      typecat:"service",
      categorie:cat
    };

    this.dialog.open(AddCategorieDialogComponent, dialogConfig);

    const dialogRef = this.dialog.open(SavePersonDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        if (data=="ok"){

          this.findAllCatProduit()
        }
      }
    );
    dialogRef.close();
  }

  findAllCatProduit(){
    this.catServiceService.findAll().subscribe(
      value => {
        this.categories = value;
      }
    )
  }

  openDialogDeleteCat(cat: any) {
    this.dialog.open(ConfirmDeleteDialogComponent, {
      disableClose:false,
    }).afterClosed().subscribe(value => {
      if (value=='oui'){
        this.catServiceService.delete(cat.id).subscribe(value1 => {
          this.ngOnInit()
          this.dialog.open(ConfirmDialogComponent, {
            disableClose:false,
            data: {
              message: "categorie service" + " supprimé avec succé",
            },
          });
        })
      }
    });
  }
}
