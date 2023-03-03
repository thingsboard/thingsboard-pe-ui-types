import { UntypedFormBuilder } from '@angular/forms';
import { IntegrationType } from '@shared/models/integration.models';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { HttpIntegrationFormComponent } from './http-integration-form.component';
import * as i0 from "@angular/core";
export declare class TMobileIotIntegrationFormComponent extends HttpIntegrationFormComponent {
    protected fb: UntypedFormBuilder;
    protected store: Store<AppState>;
    protected translate: TranslateService;
    showSecurity: boolean;
    protected integrationType: IntegrationType;
    constructor(fb: UntypedFormBuilder, store: Store<AppState>, translate: TranslateService);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TMobileIotIntegrationFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TMobileIotIntegrationFormComponent, "tb-t-mobile-iot-cdp-integration-form", never, {}, {}, never, never, false, never>;
}
