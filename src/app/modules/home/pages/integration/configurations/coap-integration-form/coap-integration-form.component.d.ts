import { SimpleChanges } from '@angular/core';
import { CoapSecurityMode, IntegrationType } from '@shared/models/integration.models';
import { Store } from '@ngrx/store';
import { AppState } from '@app/core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { IntegrationFormComponent } from '@home/pages/integration/configurations/integration-form.component';
import * as i0 from "@angular/core";
export declare class CoapIntegrationFormComponent extends IntegrationFormComponent {
    protected store: Store<AppState>;
    private translate;
    coapSecurityModes: string[];
    coapSecurityModeTranslations: Map<CoapSecurityMode, string>;
    integrationType: IntegrationType;
    routingKey: any;
    constructor(store: Store<AppState>, translate: TranslateService);
    ngOnChanges(changes: SimpleChanges): void;
    onIntegrationFormSet(): void;
    onCoapEndpointCopied(): void;
    onDtlsCoapEndpointCopied(): void;
    get noSecureMode(): boolean;
    get dtlsMode(): boolean;
    get mixedMode(): boolean;
    private checkSecurityMode;
    private integrationTypeChanged;
    private integrationBaseUrlChanged;
    private onEndpointCopied;
    static ɵfac: i0.ɵɵFactoryDeclaration<CoapIntegrationFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CoapIntegrationFormComponent, "tb-coap-integration-form", never, { "integrationType": "integrationType"; "routingKey": "routingKey"; }, {}, never, never>;
}
