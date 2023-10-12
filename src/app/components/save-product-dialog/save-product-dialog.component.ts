import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, Validators} from "@angular/forms";
import {ArticleDto} from "../../../tm-api/src-api/models/article-dto";
import {AppProductService} from "../../../services/productService/app-product.service";
import {AppCategorieProduitService} from "../../../services/categorieProduit/app-categorie-produit.service";
import {MyErrorStateMatcher} from "../../ErrorMatcher";
import {SavePersonDialogComponent} from "../save-person-dialog/save-person-dialog.component";
import {AddCategorieDialogComponent} from "../add-categorie-dialog/add-categorie-dialog.component";
import {CategoryDto} from "../../../tm-api/src-api/models/category-dto";
import {ConfirmDeleteDialogComponent} from "../confirm-delete-dialog/confirm-delete-dialog.component";
import {ConfirmDialogComponent} from "../confirm-dialog/confirm-dialog.component";
import {DataLinkTransfertService} from "../../../services/dataLinkTransfert/Data-link-transfert.service";
import {UtilisateurDto} from "../../../tm-api/src-api/models/utilisateur-dto";
import {Observable} from "rxjs";

@Component({
  selector: 'app-save-product-dialog',
  templateUrl: './save-product-dialog.component.html',
  styleUrls: ['./save-product-dialog.component.scss']
})
export class SaveProductDialogComponent implements OnInit{

  produit:ArticleDto = {};
  private _matcher = new MyErrorStateMatcher();
  categories: Array<CategoryDto> =[];

   saveForm = this.formBuilder.group({
    nom:[this.produit.designation,[
      Validators.required
    ]],
     description:[this.produit.description,
     ],
      prix:[this.produit.prixunitairettc,[
        Validators.required
      ]],
      categorie:[this.produit.category,[
        Validators.required
      ]],
      quantite:[this.produit.quantite,[
        Validators.required
      ]],
      photo:[this.produit.photo,],
  })


  constructor(private formBuilder:FormBuilder,
              private produitService:AppProductService,
              private catProduitService:AppCategorieProduitService,
              private dataLinkTransfert:DataLinkTransfertService,
              private dialog: MatDialog,
              private dialogRef: MatDialogRef<SaveProductDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private data: ArticleDto) {

     if (this.data != null){
       this.produit = this.data;
       this.saveForm.patchValue(this.produit)
       this.saveForm.controls.nom.setValue(this.produit.designation);
       this.saveForm.controls.prix.setValue(this.produit.prixunitairettc);
       this.saveForm.controls.photo.setValue(this.produit.photo);
       this.saveForm.controls.description.setValue(this.produit.description);
       this.saveForm.controls.quantite.setValue(this.produit.quantite);
       this.saveForm.controls.categorie.setValue(this.produit.category);
     }
  }


  get matcher(): MyErrorStateMatcher {
    return this._matcher;
  }

  closeDialog(p: { etat: string }) {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.findAllCatProduit();
  }

  formSubmit() {

     if(this.saveForm.valid){
       let userConnected: UtilisateurDto = JSON.parse(sessionStorage.getItem('userData') as string);
       this.produit.idEntreprise = userConnected.entreprise?.id;
       this.produit.photo = "https://res.cloudinary.com/dal83zeal/image/upload/v1695476069/TradeManagement-DefaultPicture/zv2wkltueozzhwjtpiph.png";
       this.produit.quantite = this.saveForm.controls.quantite.value as number;
       this.produit.category = this.saveForm.controls.categorie.value as CategoryDto;
       this.produit.prixunitairettc = this.saveForm.controls.prix.value as number;
       this.produit.designation = this.saveForm.controls.nom.value as string;
       this.produit.description = this.saveForm.controls.description.value as string;

       this.produitService.save(this.produit).subscribe(
         value => {
           this.closeDialog({etat :'ok'});
           this.dialog.open(ConfirmDialogComponent, {
             disableClose:false,
             data: {
               message: "Produit" + " enregisgré avec succé",
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
      typecat:"produit"
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
      typecat:"produit",
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
    this.catProduitService.findAll().subscribe(
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
          this.catProduitService.delete(cat.id).subscribe(value1 => {
            this.ngOnInit()
            this.dialog.open(ConfirmDialogComponent, {
              disableClose:false,
              data: {
                message: "categorie produit" + " supprimé avec succé",
              },
            });
          })
        }
      });
  }
}
