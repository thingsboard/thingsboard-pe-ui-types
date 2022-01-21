import { FormBuilder } from '@angular/forms';
import { IntegrationFormComponent } from '@home/pages/integration/configurations/integration-form.component';
import * as i0 from "@angular/core";
export declare class OpcUaIntegrationFormComponent extends IntegrationFormComponent {
    private fb;
    identityType: {
        anonymous: string;
        username: string;
    };
    opcUaMappingType: {
        ID: string;
        FQN: string;
    };
    extensionKeystoreType: {
        PKCS12: string;
        JKS: string;
    };
    opcSecurityTypes: {
        Basic128Rsa15: string;
        Basic256: string;
        Basic256Sha256: string;
        None: string;
    };
    showIdentityForm: boolean;
    constructor(fb: FormBuilder);
    onIntegrationFormSet(): void;
    identityTypeChanged(): void;
    securityChanged(): void;
    addMap(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<OpcUaIntegrationFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OpcUaIntegrationFormComponent, "tb-opc-ua-integration-form", never, {}, {}, never, never>;
}
