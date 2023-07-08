import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component'; 
import { NavbarComponent } from './navbar/navbar.component';
import { ChisteComponent } from './chiste/chiste.component';
import { InicioComponent } from './inicio/inicio.component';


const routes: Routes = [
  {path: 'about', component: AboutComponent},
  // {path: 'navbar', component: NavbarComponent},
  {path: 'chiste', component: ChisteComponent},
  {path: 'inicio', component: InicioComponent},
  {path: "", component:InicioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
