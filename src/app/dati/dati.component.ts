import { Component, OnInit }   from '@angular/core';
import { Router }              from '@angular/router';

import { Dati }               from '../data/formData.model';
import { FormDataService }     from '../data/formData.service';

@Component ({
    selector:     'mt-wizard-work'

    ,templateUrl: './dati.component.html'
})

export class DatiComponent implements OnInit {
    title = 'Inserisci la tua email';
    dati: Dati;
    form: any;
    
    constructor(private router: Router, private formDataService: FormDataService) { }

    ngOnInit() {
        this.dati = this.formDataService.getDati();
    }

    save(form: any): boolean {
        if (!form.valid && !form.pristine) {
            return false;
        }
        
        this.formDataService.setDati(this.dati);
        return true;
    }

    goToPrevious(form: any) {
        this.save(form);
        this.router.navigate(['/spesa']);
    }

    goToNext(form: any) {
        if (this.save(form)) {
            this.router.navigate(['/risparmio']);
        }
        return false;
    }
}