import { ChangeDetectorRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class TbErrorComponent {
    private cd;
    errorValue: string;
    state: string;
    message: string;
    constructor(cd: ChangeDetectorRef);
    set error(value: any);
    static ɵfac: i0.ɵɵFactoryDeclaration<TbErrorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TbErrorComponent, "tb-error", never, { "error": "error"; }, {}, never, never, false>;
}
