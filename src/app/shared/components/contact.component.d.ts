import { UntypedFormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class ContactComponent {
    parentForm: UntypedFormGroup;
    isEdit: boolean;
    phoneInputDefaultCountry: string;
    constructor();
    changeCountry(countryCode: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ContactComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ContactComponent, "tb-contact", never, { "parentForm": "parentForm"; "isEdit": "isEdit"; }, {}, never, never, false, never>;
}
