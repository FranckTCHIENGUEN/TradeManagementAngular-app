import {Component} from '@angular/core';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from "@angular/material/core";
import {
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter
} from "@angular/material-moment-adapter";
import {FormBuilder, Validators} from "@angular/forms";
import * as moment from 'moment';

@Component({
    selector: 'app-bilan-periodique-page',
    templateUrl: './bilan-periodique-page.component.html',
    styleUrls: ['./bilan-periodique-page.component.scss'],
    providers: [
        // The locale would typically be provided on the root module of your application. We do it at
        // the component level here, due to limitations of our example generation script.
        { provide: MAT_DATE_LOCALE, useValue: 'fr' },
        // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
        // `MatMomentDateModule` in your applications root module. We provide it at the component level
        // here, due to limitations of our example generation script.
        {
            provide: DateAdapter,
            useClass: MomentDateAdapter,
            deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
        },
        { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
    ],
    standalone: false
})
export class BilanPeriodiquePageComponent {
  saveForm = this.formBuilder.group({
    date1:[moment(),[Validators.required
    ]],
    date2:[moment(),[Validators.required]
    ],
  })

  display = false;
  date1:string = '';
  date2:string = '';
  dateMax = new Date();

  constructor(private formBuilder:FormBuilder,) {
  }

  formSubmit() {
    this.display=false;
    if (this.saveForm.valid){


      let date1 = new Date( this.saveForm.controls.date1.value?.toISOString() as string).setHours(0, 0, 0, 0);
      let date2 = new Date(this.saveForm.controls.date2.value?.toISOString() as string).setHours(23, 59, 59, 999);

      this.date1 = new Date(date1).toISOString();
      this.date2 = new Date(date2).toISOString();

      this.display = true;
    }
  }
}
