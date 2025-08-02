import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {BreadcrumbInterface, NavigationService} from "../../../services/navigationService/navigation.service";

@Component({
    selector: 'app-breadcrumb',
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.scss'],
    standalone: false
})
export class BreadcrumbComponent implements OnInit{
  history$: Observable<BreadcrumbInterface[]> | undefined;

  constructor(private navigationService: NavigationService) { }

  ngOnInit() {
    this.history$ = this.navigationService.history$;
  }

  goBack() {
    this.navigationService.goBack();
  }
}
