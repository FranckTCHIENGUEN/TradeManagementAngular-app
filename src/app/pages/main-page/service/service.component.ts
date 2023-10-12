import {Component, OnInit} from '@angular/core';
import {ArticleDto} from "../../../../tm-api/src-api/models/article-dto";
import {MatDialog} from "@angular/material/dialog";
import {AppProductService} from "../../../../services/productService/app-product.service";
import {SaveProductDialogComponent} from "../../../components/save-product-dialog/save-product-dialog.component";
import {ViewCatDialogComponent} from "../../../components/view-cat-dialog/view-cat-dialog.component";
import {ServiceDto} from "../../../../tm-api/src-api/models/service-dto";
import {AppServiceService} from "../../../../services/serviceService/app-service.service";
import {StatServiceDto} from "../../../../tm-api/src-api/models/stat-service-dto";
import {SaveServiceDialogComponent} from "../../../components/save-service-dialog/save-service-dialog.component";
import {UtilisateurDto} from "../../../../tm-api/src-api/models/utilisateur-dto";

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit{
  listService: Array<StatServiceDto> = [];
  permission: Array<string> = [];

  constructor(private dialog: MatDialog,
              private serviceService:AppServiceService,) {
    this.getPermissions();
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
    this.dialog.open(SaveServiceDialogComponent, {
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
    if (this.permission.includes('SERVICE: LIRE')){
      this.serviceService.findAll().subscribe(
        value => {
          this.listService=value
        });
    }
  }

  opendoalogCategorie() {

    this.dialog.open(ViewCatDialogComponent, {
      height: '75%',
      width: '90%',
      disableClose:false,
      data: {
        type:'service'
      },
    })
  }
}
