import {Component} from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {UtilisateurDto} from "../../../../../tm-api/src-api/models/utilisateur-dto";
import {GroupeClientDto} from "../../../../../tm-api/src-api/models/groupe-client-dto";
import {ClientDto} from "../../../../../tm-api/src-api/models/client-dto";
import {AppGroupeClientService} from "../../../../../services/groupeClientService/app-groupe-client.service";
import {
  CreerGroupeClientDialogComponent
} from "../../../../components/creer-groupe-client-dialog/creer-groupe-client-dialog.component";
import {
  AddClientToGroupDialogComponent
} from "../../../../components/add-client-to-group-dialog/add-client-to-group-dialog.component";
import {
  RemoveClientToGroupeComponent
} from "../../../../components/remove-client-to-groupe/remove-client-to-groupe.component";

@Component({
  selector: 'app-groupe-client',
  templateUrl: './groupe-client.component.html',
  styleUrls: ['./groupe-client.component.scss']
})
export class GroupeClientComponent {
  listGroupe: Array<GroupeClientDto> =[] ;
  listClient: ClientDto[] | undefined = [];
  permission: Array<string> = [];

  constructor(private groupeService:AppGroupeClientService,
              private dialog: MatDialog,) {
    this.findAll();
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

  findAll(){
    this.groupeService.findAll(true).subscribe(value => {
      this.listGroupe = value;
    })
  }

  openDialogSave() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '75%';
    dialogConfig.width = '90%';

    this.dialog.open(CreerGroupeClientDialogComponent, dialogConfig);

    const dialogRef = this.dialog.open(CreerGroupeClientDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        if (data=="ok"){

          this.findAll();
        }
      }
    );
    dialogRef.close();
  }

  openDialogEdit(role: GroupeClientDto) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '90%';
    dialogConfig.width = '90%';

    dialogConfig.data= {
      donnes: role,
    };

    this.dialog.open(CreerGroupeClientDialogComponent, dialogConfig);

    const dialogRef = this.dialog.open(CreerGroupeClientDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        if (data=="ok"){

          this.findAll();
        }
      }
    );
    dialogRef.close();

  }

  addClient(role: GroupeClientDto) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '90%';
    dialogConfig.width = '90%';

    dialogConfig.data= {
      donnes: role,
    };

    this.dialog.open(AddClientToGroupDialogComponent, dialogConfig);

    const dialogRef = this.dialog.open(AddClientToGroupDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        if (data=="ok"){

          this.findAll();
        }
      }
    );
    dialogRef.close();

  }

  removeClient(role: GroupeClientDto) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '90%';
    dialogConfig.width = '90%';

    dialogConfig.data= {
      donnes: role,
    };

    this.dialog.open(RemoveClientToGroupeComponent, dialogConfig);

    const dialogRef = this.dialog.open(RemoveClientToGroupeComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        if (data=="ok"){

          this.findAll();
        }
      }
    );
    dialogRef.close();

  }

  updatePermission(role: GroupeClientDto) {
    this.listClient = role.clientDtos
  }
}
