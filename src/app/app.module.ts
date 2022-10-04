import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { FormComponent } from './form/form.component';
import { FooterComponent } from './footer/footer.component';
import { CourserComponent } from './courser/courser.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    FormComponent,
    FooterComponent,
    CourserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
