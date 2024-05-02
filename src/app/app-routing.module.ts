import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { P12q2Component } from './p12/p12q2/p12q2.component';

const routes: Routes = [{ path: 'books', component: P12q2Component }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
