import { FormGroup } from '@angular/forms';
import { IntegrationFormComponent } from '@home/pages/integration/configurations/integration-form.component';
import * as i0 from "@angular/core";
export declare class AzureIotHubIntegrationFormComponent extends IntegrationFormComponent {
    topicFilters: FormGroup;
    azureIotHubCredentialTypes: {
        sas: {
            value: string;
            name: string;
        };
        'cert.PEM': {
            value: string;
            name: string;
        };
    };
    constructor();
    onIntegrationFormSet(): void;
    mqttCredentialsTypeChanged(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AzureIotHubIntegrationFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AzureIotHubIntegrationFormComponent, "tb-azure-iot-hub-integration-form", never, { "topicFilters": "topicFilters"; }, {}, never, never>;
}
