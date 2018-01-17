import { Component, OnInit, Input }   from '@angular/core';

import { Spesa, Dati }                from './data/formData.model';
import { FormDataService }            from './data/formData.service';

@Component ({
    selector:     'multi-step-wizard-app',
    templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
    title = 'Multi-Step Wizard';
    
    constructor(private formDataService: FormDataService) { }

    ngOnInit() { }
}