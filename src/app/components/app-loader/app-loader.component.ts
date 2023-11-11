import {Component} from '@angular/core';
import {Subject} from "rxjs";
import {LoaderService} from "../../../services/loader/loader.service";

@Component({
  selector: 'app-app-loader',
  templateUrl: './app-loader.component.html',
  styleUrls: ['./app-loader.component.scss']
})
export class AppLoaderComponent {
  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  isLoading: Subject<boolean> = this.loaderService.isLoading;
  constructor(private loaderService: LoaderService){}

  ngOnInit(): void {
  }
}
