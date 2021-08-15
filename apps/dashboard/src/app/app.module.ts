import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LanguageComponent } from './language/language.component';
import { LanguageListComponent } from './language/language-list/language-list.component';
import { LanguageDetailsComponent } from './language/language-details/language-details.component';
import { MaterialModule } from '@language-app/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreDataModule } from '@language-app/core-data';
import { CoreStateModule } from '@language-app/core-state';


@NgModule({
  declarations: [AppComponent, LanguageComponent, LanguageListComponent, LanguageDetailsComponent],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    RoutingModule, 
    BrowserAnimationsModule,
    CoreDataModule,
    CoreStateModule,
    MaterialModule, 
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}