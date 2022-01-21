import { OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
export declare abstract class IntegrationFormComponent implements OnChanges {
    form: FormGroup;
    ngOnChanges(changes: SimpleChanges): void;
    protected onIntegrationFormSet(): void;
    updateFormState(disabled: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<IntegrationFormComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<IntegrationFormComponent, never, never, { "form": "form"; }, {}, never>;
}
