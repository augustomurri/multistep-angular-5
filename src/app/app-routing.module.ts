import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpesaComponent }    from './spesa/spesa.component';
import { DatiComponent }        from './dati/dati.component';
import { RisparmioComponent }      from './risparmio/risparmio.component';

//import { WorkflowGuard }        from './workflow/workflow-guard.service';
//import { WorkflowService }      from './workflow/workflow.service';


export const appRoutes: Routes = [
    // 1st Route
    { path: 'spesa',  component: SpesaComponent },
    // 2nd Route
    //{ path: 'dati',  component: DatiComponent, canActivate: [WorkflowGuard] },
    { path: 'dati',  component: DatiComponent },
    // 3th Route
    //{ path: 'risparmio',  component: RisparmioComponent, canActivate: [WorkflowGuard] },
    { path: 'risparmio',  component: RisparmioComponent },
    // 4th Route
    { path: '',   redirectTo: '/spesa', pathMatch: 'full' },
    // 5th Route
    { path: '**', component: SpesaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true} )],
  exports: [RouterModule],
  //providers: [WorkflowGuard]
})

export class AppRoutingModule {}