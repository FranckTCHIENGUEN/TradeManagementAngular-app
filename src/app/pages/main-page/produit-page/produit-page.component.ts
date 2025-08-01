import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {SaveProductDialogComponent} from "../../../components/save-product-dialog/save-product-dialog.component";
import {ArticleDto} from "../../../../tm-api/src-api/models/article-dto";
import {AppProductService} from "../../../../services/productService/app-product.service";
import {ViewCatDialogComponent} from "../../../components/view-cat-dialog/view-cat-dialog.component";
import {UtilisateurDto} from "../../../../tm-api/src-api/models/utilisateur-dto";
import {CategoriesSearchDto, ContextCategorie} from "../../../../tm-api/src-api/models/categories-search-dto";
import {FilterCategoriesService} from "../../../../services/filterCategorieService/filter-categories.service";

@Component({
    selector: 'app-produit-page',
    templateUrl: './produit-page.component.html',
    styleUrls: ['./produit-page.component.scss'],
    standalone: false
})
export class ProduitPageComponent implements OnInit{
  listProduiut: Array<ArticleDto> = [];
  permission: Array<string> = [];
  isChecked = false;
  display = false;

  constructor(private dialog: MatDialog,
              private produitService:AppProductService,
              private filterCatService:FilterCategoriesService,) {

    this.getPermissions();
  }

  filter($event: CategoriesSearchDto) {
    this.display = false;
    if (this.permission.includes('PRODUIT: FILTRER')){
      this.filterCatService.filterCategories($event, ContextCategorie.PRODUIT).subscribe(
        value => {
          this.listProduiut = value;
          this.display = true;
        })
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
  openDialogSave() {
    this.dialog.open(SaveProductDialogComponent, {
      height: '75%',
      width: '90%',
      disableClose:false,
      data: {

      },
    }).afterClosed().subscribe(
      data => {
        if (data=="ok"){

          this.ngOnInit();
        }
      }
    );
  }

  ngOnInit(): void {

    this.findAllProduit();
  }

  findAllProduit() {
    if (this.permission.includes('PRODUIT: LIRE')){
      this.produitService.findAll().subscribe(
        value => {
          this.listProduiut=value
        });
    }

  }

  opendoalogCategorie() {

    this.dialog.open(ViewCatDialogComponent, {
      height: '75%',
      width: '90%',
      disableClose:false,
      data: {
        type:'produit'
      },
    })
  }

  protected readonly ContextCategorie = ContextCategorie;
}
