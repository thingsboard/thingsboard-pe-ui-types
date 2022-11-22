import { FormBuilder } from '@angular/forms';
import { HttpIntegrationFormComponent } from './http-integration-form.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { IntegrationType } from '@shared/models/integration.models';
import * as i0 from "@angular/core";
export declare class SigfoxIntegrationFormComponent extends HttpIntegrationFormComponent {
    protected fb: FormBuilder;
    protected store: Store<AppState>;
    protected translate: TranslateService;
    protected integrationType: IntegrationType;
    constructor(fb: FormBuilder, store: Store<AppState>, translate: TranslateService);
    static ɵfac: i0.ɵɵFactoryDeclaration<SigfoxIntegrationFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SigfoxIntegrationFormComponent, "tb-sigfox-integration-form", never, {}, {}, never, never>;
}
