import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EinstellungenComponent } from './einstellungen.component';

const routes: Routes = [{ path: '', component: EinstellungenComponent }];

@NgModule({
  declarations: [EinstellungenComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class EinstellungenModule {}
