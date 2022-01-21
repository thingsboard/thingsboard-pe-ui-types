import { IntegrationFormComponent } from '@home/pages/integration/configurations/integration-form.component';
import * as i0 from "@angular/core";
export declare class UdpIntegrationFormComponent extends IntegrationFormComponent {
    isSetDownlink: boolean;
    handlerConfigurationTypes: {
        text: {
            value: string;
            name: string;
        };
        binary: {
            value: string;
            name: string;
        };
        json: {
            value: string;
            name: string;
        };
        hex: {
            value: string;
            name: string;
        };
    };
    private defaultHandlerConfigurations;
    private fieldsSet;
    constructor();
    onIntegrationFormSet(): void;
    handlerConfigurationTypeChanged(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<UdpIntegrationFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UdpIntegrationFormComponent, "tb-udp-integration-form", never, { "isSetDownlink": "isSetDownlink"; }, {}, never, never>;
}
