import { Component } from '@angular/core';
import {PersonSearchDto} from "../../../../tm-api/src-api/models/person-search-dto";

@Component({
  selector: 'app-client-page',
  templateUrl: './client-page.component.html',
  styleUrls: ['./client-page.component.scss']
})
export class ClientPageComponent {
  isChecked: boolean=false;

  constructor() {
  }

  filter($event: PersonSearchDto) {

  }
}
