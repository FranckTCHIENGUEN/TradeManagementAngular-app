import {AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort, Sort} from "@angular/material/sort";
import {ActivatedRoute, NavigationExtras, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {ListViewDetailDialogComponent} from "../list-view-detail-dialog/list-view-detail-dialog.component";
import {ViewDetailBilanDialogComponent} from "../view-detail-bilan-dialog/view-detail-bilan-dialog.component";
import {PersonViewDetailComponent} from "../person-view-detail/person-view-detail.component";
import {FactureDialogComponent} from "../facture-dialog/facture-dialog.component";

export interface Column {
  columnDef: string;
  header: string;
  cell: Function;
  isLink?: boolean;
  isDownlable?: boolean;
  url?: string;
  isSorTable?: boolean;
  isFilterTable?: boolean;
}

@Component({
    selector: 'app-list-view',
    templateUrl: './list-view.component.html',
    styleUrls: ['./list-view.component.scss'],
    standalone: false
})
export class ListViewComponent implements OnInit, AfterViewInit, OnChanges{


  @Input()
  tableColumns: Array<Column> = [];
  @Input()
  type?:string
  @Input()
  tableData: Array<any> = [];

  displayedColumns: Array<string> = [];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();


  constructor(private router:Router,
              private route: ActivatedRoute,
              private _liveAnnouncer: LiveAnnouncer,
              private dialog: MatDialog) {
  }

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.refrexh();
  }

  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }


  ngOnChanges(changes: SimpleChanges): void {
    this.refrexh();
  }

  refrexh(){
    this.displayedColumns = this.tableColumns.map((c) => c.columnDef);
    this.dataSource = new MatTableDataSource(this.tableData);
  }

  navigate(row:any) {
    if (this.type =="commande client" ||
        this.type == "commande fournisseur" || this.type=="vente"){

     const navigationExtras: NavigationExtras = {
          state: {
            donnees: row,
            type: this.type,
          },
          // relativeTo: this.route
        };
     console.log("navigation extras", navigationExtras);
      this.router.navigate(['/mainPage/command-client/detail-commande'], navigationExtras);
      // this.dialog.open(ListViewDetailDialogComponent, {
      //   height: '90%',
      //   width: '90%',
      //   disableClose:false,
      //   data: {
      //     donnees: row,
      //     type: this.type,
      //   },
      // });
    }
    else if (this.type =="bilan comptable" ){
      this.dialog.open(ViewDetailBilanDialogComponent, {
        height: '90%',
        width: '90%',
        disableClose:false,
        data: {
          donnees: row.detailsBilan,
          date: row.date,
        },
      });
    }
    else if (this.type =="utilisateur" ){
      this.dialog.open(PersonViewDetailComponent, {
        height: '90%',
        width: '90%',
        disableClose:false,
        data: {
          typePersonne: this.type,
          person: row,
        },
      });
    }
  }


  viewFacture(id: any) {
    if (this.type =="commande client" ||
      this.type == "commande fournisseur" || this.type=="vente"){
      this.dialog.open(FactureDialogComponent, {
        height: '1122px',
        width: '793px',
        disableClose:false,
        data: {
          donnees: id,
          type: this.type,
        },
      });
    }
  }
}
