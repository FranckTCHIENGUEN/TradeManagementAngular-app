import {Component, Inject, OnInit} from '@angular/core';
import {MyErrorStateMatcher} from "../../ErrorMatcher";
import {FormBuilder, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material/dialog";
import {UtilisateurDto} from "../../../tm-api/src-api/models/utilisateur-dto";
import {ConfirmDialogComponent} from "../confirm-dialog/confirm-dialog.component";
import {GroupeClientDto} from "../../../tm-api/src-api/models/groupe-client-dto";
import {AppGroupeClientService} from "../../../services/groupeClientService/app-groupe-client.service";
import {debounceTime, distinctUntilChanged, map, Observable, startWith, switchMap} from "rxjs";
import {ClientDto} from "../../../tm-api/src-api/models/client-dto";
import {AppPersonSearchService} from "../../../services/personSearch/app-person-search.service";
import {SavePersonDialogComponent} from "../save-person-dialog/save-person-dialog.component";
import {placeObjectAtFirstPosition} from "../../utils/sort";

@Component({
    selector: 'app-add-client-to-group-dialog',
    templateUrl: './add-client-to-group-dialog.component.html',
    styleUrls: ['./add-client-to-group-dialog.component.scss'],
    standalone: false
})
export class AddClientToGroupDialogComponent implements OnInit{

  groupe:GroupeClientDto={};
  private _matcher = new MyErrorStateMatcher();
  filteredOptions: Observable<ClientDto[]> | undefined;
  listClient: Set<number> =  new  Set<number>();
  listSelectedClient: Set<ClientDto> = new Set<ClientDto>();

  saveForm = this.formBuilder.group({
    nom:[this.groupe.nom,[
      Validators.required
    ]],
    description:[this.groupe.description],
    personne:[''],
  })
  permission: Array<string> = [];

  constructor(private formBuilder:FormBuilder,
              private groupeClientService:AppGroupeClientService,
              private dialog: MatDialog,
              private filterPersonService:AppPersonSearchService,
              private dialogRef: MatDialogRef<AddClientToGroupDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private data: { donnes:GroupeClientDto }) {

    if (this.data.donnes !=null){
      this.groupe= this.data.donnes
      // this.groupe.clientDtos?.forEach(value => {
      //   this.listSelectedClient?.add(value)
      // })
      // this.groupe.clientDtos = []
      this.saveForm.patchValue(this.groupe)
    }
    this.getPermissions();
  }

  private getPermissions(){
    let utilisateurDto: UtilisateurDto = JSON.parse(sessionStorage.getItem("userData") as string);
    utilisateurDto.roles?.forEach(role => {
      role.permissions?.forEach(perm => {
        this.permission?.push(perm.permisssion!);
      })
    })
  }
  manageFilterPerson(value:string) {
    this.filteredOptions=this._filter(value);
  }

  ngOnInit() {
    this.filteredOptions = this.saveForm.controls.personne.valueChanges
      .pipe(
        startWith(''),
        debounceTime(400),
        distinctUntilChanged(),
        switchMap(val => {
          return this._filter(val || '')
        })
      );
  }

  updateSelectedClient(selected: ClientDto) {
    this.listSelectedClient?.add(selected)
    this.listClient.add(selected.id!)
    this.saveForm.controls.personne.patchValue('')
    // this.listClient.add(selected.id)
  }
  remveSelectedClient(selected: ClientDto) {
    this.listSelectedClient?.delete(selected)
    this.listClient.delete(selected.id!)
    // this.listClient.delete(selected.id)
  }

  displayFn(user: ClientDto): string {
    let nom = user.nom+" "+ user.prenom
    return user && nom ? nom : '';
  }
  private _filter(name: string): Observable<ClientDto[]> {
    // const filterValue = name.toLowerCase();

    return this.filterPersonService.fiterPerson({nom:name}, "client").pipe(map(response => response.filter((option:any )=> {
      return option.nom?.toLowerCase().indexOf(name.toLowerCase()) === 0
    })))

  }
  get matcher(): MyErrorStateMatcher {
    return this._matcher;
  }

  closeDialog(p: { etat: string }) {
    this.dialogRef.close();
  }

  nouveauClient() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '75%';
    dialogConfig.width = '90%';

    let typePersonne = "client"
    dialogConfig.data= {
      typePersonne:typePersonne
    };

    this.dialog.open(SavePersonDialogComponent, dialogConfig);

    const dialogRef = this.dialog.open(SavePersonDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        if (data.etat=="ok"){
          this.filteredOptions = placeObjectAtFirstPosition(this.filteredOptions, data.data)
          // this.findAll();
        }
      }
    );
    dialogRef.close();
  }

  formSubmit() {
    if (this.saveForm.valid){
      let userConnected: UtilisateurDto = JSON.parse(sessionStorage.getItem('userData') as string);
      this.groupe.idEntreprise = userConnected.entreprise?.id;
      this.groupe.nom = this.saveForm.value.nom as string;
      this.groupe.description = this.saveForm.value.description as string;
      let idClient:number[]=[];
      this.listClient?.forEach(value => {
       idClient.push(value)
      })

      this.groupeClientService.add(this.groupe.id!, idClient)
        .subscribe(value => {

          this.closeDialog({etat :'ok'});
          this.dialog.open(ConfirmDialogComponent, {
            disableClose:false,
            data: {
              message: "Client ajouté avec succé",
            },
          });
        })
    }

  }
}
