import {Component, Input} from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
  ɵElement
} from "@angular/forms";
import {MyErrorStateMatcher} from "../../ErrorMatcher";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-save-person-dialog',
  templateUrl: './save-person-dialog.component.html',
  styleUrls: ['./save-person-dialog.component.scss']
})
export class SavePersonDialogComponent {
  private _saveForm = this.formBuilder.group({
    nom:['',[
      Validators.required
    ]],
    contact:this.formBuilder.array([

    ]),
    ville:['',[
      Validators.required
    ]],
    quartier:[''],
    mail:[''],
  })
  private _matcher = new MyErrorStateMatcher();
  private _nombreContact=0;
  @Input() private _typePersonne?:String;

  get contact (){
    return this._saveForm.controls["contact"] as FormArray;
  }

  get nombreContact(): number {
    return this._nombreContact;
  }

  constructor(private formBuilder:FormBuilder, private dialogRef: MatDialogRef<SavePersonDialogComponent>) { }


  closeDialog() {
    this.dialogRef.close();
  }
  get saveForm(): FormGroup<{ [K in keyof { ville: (string | ((control: AbstractControl) => (ValidationErrors | null))[])[]; mail: string[]; contact: FormArray<ɵElement<any, null>>; quartier: string[]; nom: (string | ((control: AbstractControl) => (ValidationErrors | null))[])[] }]: ɵElement<{ ville: (string | ((control: AbstractControl) => (ValidationErrors | null))[])[]; mail: string[]; contact: FormArray<ɵElement<any, null>>; quartier: string[]; nom: (string | ((control: AbstractControl) => (ValidationErrors | null))[])[] }[K], null> }> {
    return this._saveForm;
  }

  get matcher(): MyErrorStateMatcher {
    return this._matcher;
  }

  get typePersonne(): String {
    return <String>this._typePersonne;
  }

  addLigne() {
    const conctactForm = this.formBuilder.group({
      tel:['',[
        Validators.required
      ]],
    });

    this.contact.push(conctactForm);
    this._nombreContact = this._nombreContact +1;
  }
  deleteLigne(contactIndex: number) {
    this.contact.removeAt(contactIndex);
    this._nombreContact = this._nombreContact -1;
  }

  disable(){
    return this._nombreContact <= 4;

  }
  formSubmit() {

    if (this._saveForm.valid){
      if (this._typePersonne==='client'){

      }
      else if (this._typePersonne==='fournisseur'){

      }
    }

  }
}
