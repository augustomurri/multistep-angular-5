import { Component, OnInit }    from '@angular/core';
import { Router }               from '@angular/router';

import { Spesa }                from '../data/formData.model';
import { FormDataService }      from '../data/formData.service';

@Component ({
    selector:     'mt-wizard-result',
    templateUrl: './risparmio.component.html'
})

export class RisparmioComponent implements OnInit {
    title = 'Il tuo risparmio con Waveco';

    private spesa: Spesa;

    private chartData: any[] = [];
    private chartLabels: any[] = [];
    private chartOptions: any = {};

    spesa_mensile: number;
    risparmio_spesa_mensile: number;

    constructor(private router: Router, private formDataService: FormDataService) { }

    ngOnInit() {

        this.formDataService.sendDati();
        this.spesa = this.formDataService.getSpesa();
        this.spesa_mensile = this.spesa.costi_mensili_tradizionali + this.spesa.consumo_mensile_bolletta + (this.spesa.numero_collaboratori * this.formDataService.costo_mensile_collaboratori);
        this.risparmio_spesa_mensile = (this.spesa.costi_mensili_tradizionali * (1 - (this.formDataService.risparmio_costi_mensili_tradizionali / 100))) + 
                                      (this.spesa.consumo_mensile_bolletta * (1 - (this.formDataService.risparmio_consumo_mensile_bolletta / 100))) + 
                                      (((this.spesa.numero_collaboratori * this.formDataService.costo_mensile_collaboratori)) * (1 - (this.formDataService.risparmio_costo_mensile_collaboratori / 100)));

        //console.log(this.spesa.costi_mensili_tradizionali);
        //console.log(this.spesa.consumo_mensile_bolletta);
        //console.log((this.spesa.numero_collaboratori * this.formDataService.costo_mensile_collaboratori));

        //console.log(monthlyCost);
        //console.log(risparmio_monthlyCost);

        this.chartData = [
            { data: [], label: 'senza Waveco', fill: false },
            { data: [], label: 'con WaveCo', fill: false },
        ];        

        this.formDataService.mesi.forEach((item, index) => {
            this.chartLabels.push(item.etichetta);
            this.chartData[0].data.push(this.spesa_mensile * item.numero_mesi);
            this.chartData[1].data.push(this.risparmio_spesa_mensile * item.numero_mesi);
        });

        this.chartOptions = { responsive: false };

        //console.log(this.chartData);
        //console.log(this.chartLabels);
    }

    goToPrevious() {
        this.router.navigate(['/dati']);
    }

    goToContatti() {
        window.location.href='//waveco.it/contatti';
    }

    submit() {
        this.router.navigate(['/spesa']);
    }
}
