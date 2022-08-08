import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EinstellungenComponent } from './einstellungen.component';
import { UserService } from '../_services/user.service';

const routes: Routes = [{ path: '', component: EinstellungenComponent }];

@NgModule({
  declarations: [EinstellungenComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [UserService]
})
export class EinstellungenModule {}
