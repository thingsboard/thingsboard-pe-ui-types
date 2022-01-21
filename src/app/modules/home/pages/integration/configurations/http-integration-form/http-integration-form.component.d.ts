import { SimpleChanges } from '@angular/core';
import { IntegrationType } from '@shared/models/integration.models';
import { Store } from '@ngrx/store';
import { AppState } from '@app/core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { IntegrationFormComponent } from '@home/pages/integration/configurations/integration-form.component';
import * as i0 from "@angular/core";
export declare class HttpIntegrationFormComponent extends IntegrationFormComponent {
    protected store: Store<AppState>;
    private translate;
    integrationType: IntegrationType;
    routingKey: any;
    isAdd: any;
    integrationTypes: typeof IntegrationType;
    loriotCredentialTypes: {
        basic: {
            value: string;
            name: string;
        };
        token: {
            value: string;
            name: string;
        };
    };
    get integrationTypeHttpOrSigfoxOrLoriot(): boolean;
    get integrationTypeThingparkOrTpe(): boolean;
    get integrationTypeLoriot(): boolean;
    constructor(store: Store<AppState>, translate: TranslateService);
    ngOnChanges(changes: SimpleChanges): void;
    onIntegrationFormSet(): void;
    generateLoriotDownlinkUrl(server: string, domain: string): void;
    resetFields(): void;
    httpEnableSecurityChanged: () => void;
    thingparkEnableSecurityChanged: () => void;
    thingparkEnableSecurityNewChanged: () => void;
    private loriotEnableFields;
    onHttpEndpointCopied(): void;
    integrationBaseUrlChanged(): void;
    private loriotCredentialsTypeChanged;
    static ɵfac: i0.ɵɵFactoryDeclaration<HttpIntegrationFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HttpIntegrationFormComponent, "tb-http-integration-form", never, { "integrationType": "integrationType"; "routingKey": "routingKey"; "isAdd": "isAdd"; }, {}, never, never>;
}
