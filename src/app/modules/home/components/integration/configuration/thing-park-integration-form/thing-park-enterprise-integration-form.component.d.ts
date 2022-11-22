import { FormBuilder } from '@angular/forms';
import { IntegrationType } from '@shared/models/integration.models';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { ThingParkIntegrationFormComponent } from '@home/components/integration/configuration/thing-park-integration-form/thing-park-integration-form.component';
import * as i0 from "@angular/core";
export declare class ThingParkEnterpriseIntegrationFormComponent extends ThingParkIntegrationFormComponent {
    protected fb: FormBuilder;
    protected store: Store<AppState>;
    protected translate: TranslateService;
    protected integrationType: IntegrationType;
    constructor(fb: FormBuilder, store: Store<AppState>, translate: TranslateService);
    ngOnInit(): void;
    setDisabledState(isDisabled: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThingParkEnterpriseIntegrationFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThingParkEnterpriseIntegrationFormComponent, "tb-thing-spark-enterprise-integration-form", never, {}, {}, never, never>;
}
