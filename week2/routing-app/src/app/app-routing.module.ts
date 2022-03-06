import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CategoriesComponent } from './categories/categories.component';
import { ACategoryComponent } from './a-category/a-category.component';
import { BCategoryComponent } from './b-category/b-category.component';

const routes: Routes = [
  { path:'Category',component:CategoriesComponent},
  { path:'Aboutus',component:AboutusComponent},
  { path:'Acategory',component:ACategoryComponent},
  { path:'Bcategory',component:BCategoryComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
