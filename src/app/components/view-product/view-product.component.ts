import {Component, Input} from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {ProductDetailDialogComponent} from "../product-detail-dialog/product-detail-dialog.component";
import {ServiceDetailDialogComponent} from "../service-detail-dialog/service-detail-dialog.component";
import {StatServiceDto} from "../../../tm-api/src-api/models/stat-service-dto";
import {SaveServiceDialogComponent} from "../save-service-dialog/save-service-dialog.component";
import {AppServiceService} from "../../../services/serviceService/app-service.service";

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent {
  @Input() listOfData: Array<any> = [];
  @Input() typeAffichage: string | undefined;

  constructor(private dialog: MatDialog,) {
  }

  openDialogEditService(service: StatServiceDto, index:number) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '75%';
    dialogConfig.width = '90%';

    dialogConfig.data= service.serviceDto;

    this.dialog.open(SaveServiceDialogComponent, dialogConfig);

    const dialogRef = this.dialog.open(SaveServiceDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        if (data.etat=="ok"){
          this.listOfData[index] = data.data;

          // this.servicService.findById(service.serviceDto?.id as number).subscribe(
          //   value => {
          //     this.listOfData[index] = value;
          //   }
          // )
        }
      }
    );
    dialogRef.close();

  }

  callDetail(data:any) {
    if (this.typeAffichage==='produit'){
      this.dialog.open(ProductDetailDialogComponent, {
        height: '90%',
        width: '30%',
        disableClose:false,
        data: {
          data: data,
        },
      });
    }
    else if (this.typeAffichage==='service'){
      this.dialog.open(ServiceDetailDialogComponent, {
        height: '90%',
        width: '90%',
        disableClose:false,
        data: {
          data: data,
        },
      });
    }

  }
}
