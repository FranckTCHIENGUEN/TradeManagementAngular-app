import {Component, Input} from '@angular/core';
import {map, Observable, startWith} from "rxjs";
import {FormArray, FormBuilder, Validators} from "@angular/forms";
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import 'moment/locale/fr';

export interface User {
  name: string;
}
@Component({
  selector: 'app-vente',
  templateUrl: './vente.component.html',
  styleUrls: ['./vente.component.scss'],
  providers: [
    // The locale would typically be provided on the root module of your application. We do it at
    // the component level here, due to limitations of our example generation script.
    {provide: MAT_DATE_LOCALE, useValue: 'fr'},

    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
    // `MatMomentDateModule` in your applications root module. We provide it at the component level
    // here, due to limitations of our example generation script.
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
})
export class VenteComponent {
  personnes: any;
  saveForm = this.formBuilder.group({
    personne:['',[
      Validators.required
    ]],

    dateRetrait:[null,[
      Validators.required
    ]],
    dateCommande:[null,[
      Validators.required
    ]],
    montantTotal:[1,[
      Validators.required
    ]],
    avance:[0,[
      Validators.required
    ]],
    resteAPayer:[0,[
      Validators.required
    ]],
    resteAdonner:[0,[
      Validators.required
    ]],
    modePaiement:[null,[
      Validators.required
    ]],
    ligneCom:this.formBuilder.array([

    ]),
  })
  options: User[] = [{name: 'Mary'}, {name: 'Shelley'}, {name: 'Igor'}];
  filteredOptions: Observable<User[]> | undefined;
  type: any;
  private _isSubmited = false;
  private _resteAdonner: number = 0;
  private _montantTotal: number = 0;
  private _Restepayer: number = 0;
  selected: any;
  @Input() typeEnregistrement: string | undefined;

  constructor(private formBuilder:FormBuilder) { }

  get resteAdonner(): number {
    return this._resteAdonner;
  }

  get montantTotal(): number {
    return this._montantTotal;
  }

  get Restepayer(): number {
    return this._Restepayer;
  }

  get ligneCom (){
    return this.saveForm.controls["ligneCom"] as FormArray;
  }

  ngOnInit() {
    this.filteredOptions = this.saveForm.controls["personne"].valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : 'personne';
        return name ? this._filter(name as string) : this.options.slice();
      }),
    );

    this.addLigne();
  }

  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  addLigne() {
    const ligneComForm = this.formBuilder.group({
      objet: ['', Validators.required],
      type:['',[
        Validators.required
      ]],
      quantite: [1, Validators.required],
      prixUnitaire: [1, Validators.required],
      prixTotal: [1, Validators.required],
    });

    this.ligneCom.push(ligneComForm);
    this.calculmontantTotal();
    this.calculRestepayer();
  }

  deleteLigneCom(ligneComIndex: number) {
    this.ligneCom.removeAt(ligneComIndex);
    this.calculmontantTotal();
    this.calculRestepayer();
  }

  getType(event: any) {
    this.type = event.value;
    console.log(this.type)
  }

  calculmontant(i: number) {
    this.ligneCom.at(i).get("prixTotal")?.patchValue(
      this.ligneCom.at(i).get("quantite")?.value * this.ligneCom.at(i).get("prixUnitaire")?.value as number
    )
    this.calculmontantTotal();
    this.calculRestepayer();
  }

  calculmontantTotal() {
    let montant:number = 0;

    for (let i = 0; i < this.ligneCom.length; i++) {
      montant = montant + this.ligneCom.at(i).get('prixTotal')?.value;
    }
    this.saveForm.controls["montantTotal"].patchValue(montant);
  }

  calculRestepayer() {
    let number = (this.saveForm.controls.montantTotal.value as number) - (this.saveForm.controls.avance.value as number)
    if (number < 0){
      this.calculrestedonner(number);
      number = 0;
    }
    else if (number >= 0){
      this.calculrestedonner(0)
    }
    this.saveForm.controls["resteAPayer"].patchValue(number)
    this._Restepayer = number;
  }

  calculrestedonner(number:number) {
    this._resteAdonner = number * (-1);
    this.saveForm.controls["resteAdonner"].patchValue(this._resteAdonner)
  }

  formSubmit() {
    this._isSubmited = true;
    if (!this.saveForm.valid) {
      console.log('Please provide all the required values!')

    } else {
      console.log(this.saveForm.value);
    }
  }

  nouveauClient() {

  }

  nouveau() {

  }

  isDisable() {
    let disable = true
    if (this.ligneCom.length >0){
      disable=false;
    }
    return disable;
  }
}
