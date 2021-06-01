import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { ChatComponent } from './components/chat/chat.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from './components/dialog/dialog.component';
import { ForgetComponent } from './components/forget/forget.component';
import { UserComponent } from './components/user/user.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    DialogComponent,
    ForgetComponent,
    UserComponent,
  ],
  entryComponents: [DialogComponent],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
