import {Component, Inject, OnInit} from '@angular/core';
import {MyErrorStateMatcher} from "../../ErrorMatcher";
import {FormBuilder, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material/dialog";
import {UtilisateurDto} from "../../../tm-api/src-api/models/utilisateur-dto";
import {ConfirmDialogComponent} from "../confirm-dialog/confirm-dialog.component";
import {AddCategorieDialogComponent} from "../add-categorie-dialog/add-categorie-dialog.component";
import {SavePersonDialogComponent} from "../save-person-dialog/save-person-dialog.component";
import {GroupeClientDto} from "../../../tm-api/src-api/models/groupe-client-dto";
import {CreerGroupeClientDialogComponent} from "../creer-groupe-client-dialog/creer-groupe-client-dialog.component";
import {AppGroupeClientService} from "../../../services/groupeClientService/app-groupe-client.service";

@Component({
    selector: 'app-addgroupetoclient',
    templateUrl: './addgroupetoclient.component.html',
    styleUrls: ['./addgroupetoclient.component.scss'],
    standalone: false
})
export class AddgroupetoclientComponent implements OnInit{

  // idGroupe: number | undefined = 0 ;
  idClient: Array<number>=[] ;
  private _matcher = new MyErrorStateMatcher();
  groupe: Array<GroupeClientDto> =[];

  saveForm = this.formBuilder.group({
    idGroupe:[[
      Validators.required
    ]],
  })
  permission: Array<string> = [];

  constructor(private formBuilder:FormBuilder,
              private groupeClientService:AppGroupeClientService,
              private dialog: MatDialog,
              private dialogRef: MatDialogRef<AddgroupetoclientComponent>,
              @Inject(MAT_DIALOG_DATA) private data: { id:number }) {
    this.getPermissions();
    if (this.data != null){
      this.idClient?.push(this.data.id);
    }
  }
  private getPermissions(){
    let utilisateurDto: UtilisateurDto = JSON.parse(sessionStorage.getItem("userData") as string);
    utilisateurDto.roles?.forEach(role => {
      role.permissions?.forEach(perm => {
        this.permission?.push(perm.permisssion!);
      })
    })
  }

  get matcher(): MyErrorStateMatcher {
    return this._matcher;
  }

  closeDialog(p: { etat: string, data:any|null }) {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.findAllGroupeClient();
  }

  formSubmit() {

    if(this.saveForm.valid){
      let userConnected: UtilisateurDto = JSON.parse(sessionStorage.getItem('userData') as string);


      this.groupeClientService.add(this.saveForm.controls.idGroupe.value! as number, this.idClient).subscribe(
        value => {
          this.closeDialog({etat :'ok', data:value});
          this.dialog.open(ConfirmDialogComponent, {
            disableClose:false,
            data: {
              message: "Produit" + " enregisgré avec succé",
            },
          });
        }
      )
    }

  }

  nouveauGroupe() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '50%';
    dialogConfig.width = '50%';

    // dialogConfig.data= {
    //   typecat:"produit"
    // };

    this.dialog.open(CreerGroupeClientDialogComponent, dialogConfig);

    const dialogRef = this.dialog.open(CreerGroupeClientDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        if (data=="ok"){

          this.groupe.push(data.data)
        }
      }
    );
    dialogRef.close();
  }

  openDialogEditCat(cat: any) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '25%';
    dialogConfig.width = '50%';

    dialogConfig.data= {
      typecat:"produit",
      categorie:cat
    };

    this.dialog.open(AddCategorieDialogComponent, dialogConfig);

    const dialogRef = this.dialog.open(SavePersonDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        if (data=="ok"){

          this.findAllGroupeClient()
        }
      }
    );
    dialogRef.close();
  }

  findAllGroupeClient(){
    this.groupeClientService.findAll(true).subscribe(
      value => {
        this.groupe = value;
      }
    )
  }

}
