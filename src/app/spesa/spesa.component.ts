import { Component, OnInit, Input }   from '@angular/core';
import { Router }              from '@angular/router';

import { Spesa }     from '../data/formData.model';
import { FormDataService }     from '../data/formData.service';

@Component ({
    selector:     'mt-wizard-personal',
    templateUrl: './spesa.component.html',
    styleUrls: ['./style.css'],
})

export class SpesaComponent implements OnInit {

    title = 'Indicaci i tuoi costi';
    spesa: Spesa;
    form: any;

    constructor(private router: Router, private formDataService: FormDataService) { }

    ngOnInit() {
        this.spesa = this.formDataService.getSpesa();
    }

    save(form: any): boolean {
        if (!form.valid) {
            return false;
        }

        this.formDataService.setSpesa(this.spesa);
        return true;
    }

    goToNext(form: any) {
        /*
        if (this.save(form)) {
            this.router.navigate(['/dati']);
        }
        */        
        return false;
    }
}
