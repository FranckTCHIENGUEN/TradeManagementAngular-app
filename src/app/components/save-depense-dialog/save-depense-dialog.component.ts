import {Component, Inject, OnInit} from '@angular/core';
import {ArticleDto} from "../../../tm-api/src-api/models/article-dto";
import {MyErrorStateMatcher} from "../../ErrorMatcher";
import {FormArray, FormBuilder, Validators} from "@angular/forms";
import {DataLinkTransfertService} from "../../../services/dataLinkTransfert/Data-link-transfert.service";
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material/dialog";
import {UtilisateurDto} from "../../../tm-api/src-api/models/utilisateur-dto";
import {ConfirmDialogComponent} from "../confirm-dialog/confirm-dialog.component";
import {AddCategorieDialogComponent} from "../add-categorie-dialog/add-categorie-dialog.component";
import {SavePersonDialogComponent} from "../save-person-dialog/save-person-dialog.component";
import {ConfirmDeleteDialogComponent} from "../confirm-delete-dialog/confirm-delete-dialog.component";
import {DepensesDto} from "../../../tm-api/src-api/models/depenses-dto";
import {CategorieDepenseDto} from "../../../tm-api/src-api/models/categorie-depense-dto";
import {AppDepenseService} from "../../../services/depenseService/app-depense.service";
import {AppCategorieDepenseService} from "../../../services/categorieDepenseService/app-categorie-depense.service";
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from "@angular/material/core";
import {
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter
} from "@angular/material-moment-adapter";
import * as moment from "moment/moment";
import {Observable, Observer} from "rxjs";

@Component({
  selector: 'app-save-depense-dialog',
  templateUrl: './save-depense-dialog.component.html',
  styleUrls: ['./save-depense-dialog.component.scss'],
  providers: [
    // The locale would typically be provided on the root module of your application. We do it at
    // the component level here, due to limitations of our example generation script.
    {provide: MAT_DATE_LOCALE, useValue: 'fr'},

    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
    // `MatMomentDateModule` in your applications root module. We provide it at the component level
    // here, due to limitations of our example generation script.
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
})
export class SaveDepenseDialogComponent implements OnInit{
  depense:DepensesDto = {};
  private _matcher = new MyErrorStateMatcher();
  categories: Observable<CategorieDepenseDto[]> | undefined;

  saveForm = this.formBuilder.group({
    ligneDepense:this.formBuilder.array([

    ]),
  })

  permission: Array<string> = [];
  constructor(private formBuilder:FormBuilder,
              private depenseService:AppDepenseService,
              private catDepenseService:AppCategorieDepenseService,
              private dataLinkTransfert:DataLinkTransfertService,
              private dialog: MatDialog,
              private dialogRef: MatDialogRef<SaveDepenseDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private data: ArticleDto) {
    this.getPermissions();
    this.findAllCatProduit()
    // if (this.data != null){
    //   this.depense = this.data;
    //   this.saveForm.patchValue(this.depense)
    //   this.saveForm.controls.nom.setValue(this.produit.designation);
    //   this.saveForm.controls.prix.setValue(this.produit.prixunitairettc);
    //   this.saveForm.controls.photo.setValue(this.produit.photo);
    //   this.saveForm.controls.description.setValue(this.produit.description);
    //   this.saveForm.controls.quantite.setValue(this.produit.quantite);
    //   this.saveForm.controls.categorie.setValue(this.produit.category);
    // }
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
  get ligneDepense (){
    return this.saveForm.controls["ligneDepense"] as FormArray;
  }

  closeDialog(p: { etat: string }) {
    this.dialogRef.close(p);
  }

  addLigne() {
    const ligneDepenseForm = this.formBuilder.group({

      nom:[this.depense.nomArticle,[
        Validators.required
      ]],
      description:[this.depense.description,
      ],
      prix:[this.depense.prixunitaire,[
        Validators.required
      ]],
      categorie:[this.depense.categorieDepense,[
        Validators.required
      ]],
      quantite:[this.depense.quantite,[
        Validators.required
      ]],
      date:[moment(),[
        Validators.required
      ]],
      montantTotal:[this.depense.montantTotal,[
        Validators.required
      ]],
    });


    this.ligneDepense.push(ligneDepenseForm);
  }

  deleteLigneCom(ligneComIndex: number) {
    this.ligneDepense.removeAt(ligneComIndex);
  }
  calculmontant(i: number) {
    this.ligneDepense.at(i).get("montantTotal")?.patchValue(
      this.ligneDepense.at(i).get("quantite")?.value * this.ligneDepense.at(i).get("prix")?.value as number
    )
  }
  calculPrixUnitaire(i: number) {
    this.ligneDepense.at(i).get("prix")?.patchValue(
      this.ligneDepense.at(i).get("montantTotal")?.value / this.ligneDepense.at(i).get("quantite")?.value as number
    )
  }

  ngOnInit(): void {

    this.addLigne();
  }

  formSubmit() {

    if(this.saveForm.valid){
      let userConnected: UtilisateurDto = JSON.parse(sessionStorage.getItem('userData') as string);

      let ele :Array<DepensesDto> = [];

      for (let i = 0; i < this.ligneDepense.length; i++) {

        const lig:DepensesDto = {
          idEntreprise : userConnected.entreprise?.id,
          dateDepense :this.ligneDepense.at(i).get('date')?.value.toISOString() as string,
          categorieDepense : this.ligneDepense.at(i).get('categorie')?.value as CategorieDepenseDto,
          prixunitaire : this.ligneDepense.at(i).get('prix')?.value as number,
          quantite : this.ligneDepense.at(i).get('quantite')?.value as number,
          montantTotal : this.ligneDepense.at(i).get('montantTotal')?.value as number,
          description : this.ligneDepense.at(i).get('description')?.value as string,
          nomArticle : this.ligneDepense.at(i).get('nom')?.value as string
        };

        ele.push(lig)
      }
      this.depenseService.saveAll(ele).subscribe(
        value => {
          this.closeDialog({etat :'ok'});
          this.dialog.open(ConfirmDialogComponent, {
            disableClose:false,
            data: {
              message: "depenses" + " enregisgré avec succé",
            },
          });
        }
      )
    }

  }

  nouvelleCategorie() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '50%';
    dialogConfig.width = '50%';

    dialogConfig.data= {
      typecat:"depense"
    };

    this.dialog.open(AddCategorieDialogComponent, dialogConfig);

    const dialogRef = this.dialog.open(AddCategorieDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        if (data.etat=="ok"){
          this.categories = new Observable( ( observer : Observer<CategorieDepenseDto[]> ) => {
            setTimeout ( () => {
              observer.next(data.data);
            }, 1000);
          });
          // this.categories.push(data.data)
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
      typecat:"depense",
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
    this.catDepenseService.findAll().subscribe(
      value => {
        // this.categories = value;
        this.categories = new Observable( ( observer : Observer<CategorieDepenseDto[]> ) => {
          setTimeout ( () => {
            observer.next(value);
          }, 1000);
        });
      }
    )
  }

  openDialogDeleteCat(cat: any) {
    this.dialog.open(ConfirmDeleteDialogComponent, {
      disableClose:false,
    }).afterClosed().subscribe(value => {
      if (value=='oui'){
        this.catDepenseService.delete(cat.id).subscribe(value1 => {
          this.ngOnInit()
          this.dialog.open(ConfirmDialogComponent, {
            disableClose:false,
            data: {
              message: "categorie depense" + " supprimé avec succé",
            },
          });
        })
      }
    });
  }
}
