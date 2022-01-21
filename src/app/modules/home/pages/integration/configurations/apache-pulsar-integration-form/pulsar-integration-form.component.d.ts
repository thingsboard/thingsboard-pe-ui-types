import { IntegrationFormComponent } from '@home/pages/integration/configurations/integration-form.component';
import * as i0 from "@angular/core";
export declare class PulsarIntegrationFormComponent extends IntegrationFormComponent {
    apachePulsarCredentialsTypes: {
        anonymous: {
            value: string;
            name: string;
        };
        token: {
            value: string;
            name: string;
        };
    };
    constructor();
    onIntegrationFormSet(): void;
    pulsarCredentialsTypeChanged(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PulsarIntegrationFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PulsarIntegrationFormComponent, "tb-pulsar-integration-form", never, {}, {}, never, never>;
}
