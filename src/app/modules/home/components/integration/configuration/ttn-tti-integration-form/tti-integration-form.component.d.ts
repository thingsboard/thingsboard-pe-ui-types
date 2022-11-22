import { FormBuilder } from '@angular/forms';
import { TtnIntegrationFormComponent } from './ttn-integration-form.component';
import * as i0 from "@angular/core";
export declare class TtiIntegrationFormComponent extends TtnIntegrationFormComponent {
    protected fb: FormBuilder;
    hostRegionSuffix: string;
    userNameLabel: string;
    userNameRequired: string;
    passwordLabel: string;
    passwordRequired: string;
    hideSelectVersion: boolean;
    constructor(fb: FormBuilder);
    setDisabledState(isDisabled: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TtiIntegrationFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TtiIntegrationFormComponent, "tb-tti-integration-form", never, {}, {}, never, never>;
}
