import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material/dialog";
import {ArticleDto} from "../../../tm-api/src-api/models/article-dto";
import {StatServiceDto} from "../../../tm-api/src-api/models/stat-service-dto";
import {AppProductService} from "../../../services/productService/app-product.service";
import {SaveProductDialogComponent} from "../save-product-dialog/save-product-dialog.component";
import {AppServiceService} from "../../../services/serviceService/app-service.service";
import {SaveServiceDialogComponent} from "../save-service-dialog/save-service-dialog.component";
import {UtilisateurDto} from "../../../tm-api/src-api/models/utilisateur-dto";

@Component({
  selector: 'app-service-detail-dialog',
  templateUrl: './service-detail-dialog.component.html',
  styleUrls: ['./service-detail-dialog.component.scss']
})
export class ServiceDetailDialogComponent {
  service:StatServiceDto = {}
  permission: Array<string> = [];

  constructor(private servicService:AppServiceService,
              private dialog: MatDialog,
              @Inject(MAT_DIALOG_DATA) private data: any,
              private dialogRef: MatDialogRef<ServiceDetailDialogComponent>) {
    this.getPermissions();
    this.service = this.data.data;
  }

  private getPermissions(){
    let utilisateurDto: UtilisateurDto = JSON.parse(sessionStorage.getItem("userData") as string);
    utilisateurDto.roles?.forEach(role => {
      role.permissions?.forEach(perm => {
        this.permission?.push(perm.permisssion!);
      })
    })
  }

  closeDialog() {
    this.dialogRef.close();
  }

  openDialogEdit(produit: StatServiceDto) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '75%';
    dialogConfig.width = '90%';

    dialogConfig.data= produit.serviceDto;

    this.dialog.open(SaveServiceDialogComponent, dialogConfig);

    const dialogRef = this.dialog.open(SaveServiceDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        if (data=="ok"){

          this.servicService.findById(this.service.serviceDto?.id as number).subscribe(
            value => {
              this.service = value;
            }
          )
        }
      }
    );
    dialogRef.close();

  }

  ngOnInit(): void {
  }
}
