import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',   /*Path dove caricherà il main module */
    loadChildren: () => import('./main/main.module').then((m) => m.MainModule) // i forchild sono per tutti coloro
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
