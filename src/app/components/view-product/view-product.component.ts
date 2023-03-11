import {Component, Input} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ListViewDetailDialogComponent} from "../list-view-detail-dialog/list-view-detail-dialog.component";
import {ProductDetailDialogComponent} from "../product-detail-dialog/product-detail-dialog.component";
import {ServiceDetailDialogComponent} from "../service-detail-dialog/service-detail-dialog.component";

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent {
  @Input() listOfData: any;
  @Input() typeAffichage: string | undefined;

  constructor(private dialog: MatDialog,) {
  }

  callDetail(id:number) {
    if (this.typeAffichage==='produit'){
      this.dialog.open(ProductDetailDialogComponent, {
        height: '90%',
        width: '90%',
        disableClose:false,
        data: {
          id: id,
        },
      });
    }
    else if (this.typeAffichage==='service'){
      this.dialog.open(ServiceDetailDialogComponent, {
        height: '90%',
        width: '90%',
        disableClose:false,
        data: {
          id: id,
        },
      });
    }

  }
}
