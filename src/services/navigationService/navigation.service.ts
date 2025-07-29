import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs/operators";

export interface BreadcrumbInterface {
  url: string;
  label: string;
}

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private history = new BehaviorSubject<BreadcrumbInterface[]>([]);
  public history$ = this.history.asObservable();

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateHistory();
    });
  }

  private updateHistory(): void {
    let currentRoute = this.route.root;
    let url = '';
    let breadcrumbs: BreadcrumbInterface[] = [];

    while (currentRoute.firstChild) {
      currentRoute = currentRoute.firstChild;
      url += currentRoute.snapshot.url.map(segment => segment.path).join('/');
      const label = currentRoute.snapshot.data['breadcrumb'] || url; // Récupère le libellé depuis les données de la route
      breadcrumbs.push({ url, label });
    }

    this.history.next(breadcrumbs);
  }

  public goBack(): void {
    const history = this.history.value;
    if (history.length > 1) {
      this.history.next(history.slice(0, history.length - 1));
      this.router.navigateByUrl(history[history.length - 2].url);
    }
  }
}
