import { SimpleChanges } from '@angular/core';
import { IntegrationType } from '@shared/models/integration.models';
import { Store } from '@ngrx/store';
import { AppState } from '@app/core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { IntegrationFormComponent } from '@home/pages/integration/configurations/integration-form.component';
import * as i0 from "@angular/core";
export declare class ChirpstackIntegrationFormComponent extends IntegrationFormComponent {
    protected store: Store<AppState>;
    private translate;
    integrationType: IntegrationType;
    routingKey: any;
    constructor(store: Store<AppState>, translate: TranslateService);
    ngOnChanges(changes: SimpleChanges): void;
    onIntegrationFormSet(): void;
    onHttpEndpointCopied(): void;
    integrationBaseUrlChanged(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ChirpstackIntegrationFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ChirpstackIntegrationFormComponent, "tb-chirpstack-integration-form", never, { "integrationType": "integrationType"; "routingKey": "routingKey"; }, {}, never, never>;
}
