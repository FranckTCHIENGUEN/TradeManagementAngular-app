import {AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort, Sort} from "@angular/material/sort";
import {PeriodicElement} from "./periodicElecment";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {ListViewDetailDialogComponent} from "../list-view-detail-dialog/list-view-detail-dialog.component";

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit, AfterViewInit, OnChanges{
  @Input() data?:any;
  @Input() link:any;
  @Input() displayedColumns: any;
  clickedRows = new  Set <PeriodicElement>();
  @Input() columnsInfo: any ;
  dataSource= new MatTableDataSource<PeriodicElement>(this.data);
  @Input() filterValue: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort ;

  constructor(private _liveAnnouncer: LiveAnnouncer, private router:Router, private dialog: MatDialog) {
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  ngOnInit(): void {

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
    this.dataSource= new MatTableDataSource<PeriodicElement>(this.data);
    this.dataSource.filter = this.filterValue;
  }

  navigate(row:any) {
    this.dialog.open(ListViewDetailDialogComponent, {
      height: '90%',
      width: '90%',
      disableClose:false,
      data: {
        data: row,
      },
    });
    console.log(row)
  }
}
