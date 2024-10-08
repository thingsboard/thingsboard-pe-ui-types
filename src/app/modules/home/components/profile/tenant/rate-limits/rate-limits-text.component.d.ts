import { OnChanges, SimpleChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { RateLimits } from './rate-limits.models';
import * as i0 from "@angular/core";
export declare class RateLimitsTextComponent implements OnChanges {
    private translate;
    rateLimitsArray: Array<RateLimits>;
    disabled: boolean;
    rateLimitsText: string;
    constructor(translate: TranslateService);
    ngOnChanges(changes: SimpleChanges): void;
    private updateView;
    static ɵfac: i0.ɵɵFactoryDeclaration<RateLimitsTextComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RateLimitsTextComponent, "tb-rate-limits-text", never, { "rateLimitsArray": { "alias": "rateLimitsArray"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, false, never>;
}
