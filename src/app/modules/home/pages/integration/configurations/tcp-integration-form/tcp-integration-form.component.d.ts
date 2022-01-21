import { IntegrationFormComponent } from '@home/pages/integration/configurations/integration-form.component';
import * as i0 from "@angular/core";
export declare class TcpIntegrationFormComponent extends IntegrationFormComponent {
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
    handlerTypes: {
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
    tcpBinaryByteOrder: {
        littleEndian: {
            value: string;
        };
        bigEndian: {
            value: string;
        };
    };
    tcpTextMessageSeparator: {
        systemLineSeparator: {
            value: string;
        };
        nulDelimiter: {
            value: string;
        };
    };
    private defaultHandlerConfigurations;
    private fieldsSet;
    constructor();
    onIntegrationFormSet(): void;
    setDefaultValue(type: string): void;
    handlerConfigurationTypeChanged(type: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TcpIntegrationFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TcpIntegrationFormComponent, "tb-tcp-integration-form", never, { "isSetDownlink": "isSetDownlink"; }, {}, never, never>;
}
