import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivredescriptionComponent } from './livredescription/livredescription.component';
import { NouveautesComponent } from './nouveautes/nouveautes.component';
import { TopComponent } from './top/top.component';

const routes: Routes = [
  {path:"",component:NouveautesComponent},
  {path:"livredescription",component:LivredescriptionComponent}

]
  

;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
