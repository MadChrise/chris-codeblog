import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './_view/home/home.component';
import { UserService } from './_services/user.service';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, HomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        { path: '', component: HomeComponent },
        {
          path: 'einstellungen',
          loadChildren: () =>
            import('./einstellungen/einstellungen.module').then(
              (m) => m.EinstellungenModule
            ),
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
