import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CategoriesComponent } from './categories/categories.component';
import { ACategoryComponent } from './a-category/a-category.component';
import { BCategoryComponent } from './b-category/b-category.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    CategoriesComponent,
    ACategoryComponent,
    BCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
