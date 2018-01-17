import { Injectable }       from '@angular/core';
import { HttpClient, HttpParams }       from '@angular/common/http';
import { Spesa, Dati }      from './formData.model';
//import { WorkflowService }  from '../workflow/workflow.service';
import { STEPS }            from '../workflow/workflow.model';

@Injectable()
export class FormDataService {

    private spesa: Spesa = new Spesa();
    private dati: Dati = new Dati();

    private isSpesaFormValid: boolean = false;
    private isDatiFormValid: boolean = false;

    // percentuali di risparmio
    readonly costo_mensile_collaboratori: number = 1562.5;
    readonly risparmio_costi_mensili_tradizionali: number = 35;
    readonly risparmio_consumo_mensile_bolletta: number = 70;
    readonly risparmio_costo_mensile_collaboratori: number = 50;

    readonly mesi: Array<any> = [
        { etichetta: '1 mese', numero_mesi: 1 },
        { etichetta: '1 anno', numero_mesi: 12 },
        { etichetta: '5 anni', numero_mesi: 60 },
        { etichetta: '10 anni', numero_mesi: 120 }
    ];

    constructor(//private workflowService: WorkflowService, 
                private http: HttpClient) { }

    getSpesa(): Spesa {
        var spesa: Spesa = {
            costi_mensili_tradizionali: this.spesa.costi_mensili_tradizionali,
            consumo_mensile_bolletta: this.spesa.consumo_mensile_bolletta,
            numero_collaboratori: this.spesa.numero_collaboratori
        };
        return spesa;
    }

    setSpesa(data: Spesa) {
        // Aggiorna i dati della spesa solo quando sono correttamente validati
        this.isSpesaFormValid = true;

        this.spesa.costi_mensili_tradizionali = Number(data.costi_mensili_tradizionali);
        this.spesa.consumo_mensile_bolletta = Number(data.consumo_mensile_bolletta);
        this.spesa.numero_collaboratori = Number(data.numero_collaboratori);

        // Valida il primo step nel Workflow
        //this.workflowService.validateStep(STEPS.spesa);
    }

    getDati() {
        var dati: Dati = {
            email: this.dati.email,
            privacy: this.dati.privacy
        }
        return dati;
    }

    setDati(data: Dati) {
        this.isDatiFormValid = true;
        this.dati.email = data.email;

        // Valida il secondo nel Workflow
        //this.workflowService.validateStep(STEPS.dati);
    }

    sendDati() {
        var body = { dati: this.dati, spesa: this.spesa };
        var req = this.http.post('//waveco.it/wp-admin/admin-ajax.php?action=send_food_cost', body).subscribe(
                res => {
                    console.log(res);
                },
                err => {
                    console.log(err);
                }
            );
    }
}