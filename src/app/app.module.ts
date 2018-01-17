import { NgModule, LOCALE_ID }  from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { HttpClientModule }     from '@angular/common/http';
import { FormsModule }          from '@angular/forms';
import { ChartsModule }         from 'ng2-charts';

/* App Root */
import { AppComponent }         from './app.component';
import { NavbarComponent }      from './navbar/navbar.component';

/* Feature Components */
import { SpesaComponent }       from './spesa/spesa.component';
import { DatiComponent }        from './dati/dati.component';
import { RisparmioComponent }   from './risparmio/risparmio.component';

/* Routing Module */
import { AppRoutingModule }     from './app-routing.module';

/* Shared Service */
import { FormDataService }      from './data/formData.service';
//import { WorkflowService }      from './workflow/workflow.service';

@NgModule({
    imports:      [ BrowserModule, 
                    FormsModule,
                    HttpClientModule,
                    AppRoutingModule,
                    ChartsModule
                  ],
    providers:    [{ provide: FormDataService, useClass: FormDataService },
//                   { provide: WorkflowService, useClass: WorkflowService },
                   { provide: LOCALE_ID, useValue: 'it-IT' }
                ],
    declarations: [ AppComponent, NavbarComponent, SpesaComponent, DatiComponent, RisparmioComponent],
    bootstrap:    [ AppComponent ],
})

export class AppModule {}