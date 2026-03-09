import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class InputChangeDirective {
    min: number;
    max: number;
    inputChange: EventEmitter<number>;
    inputChanges(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputChangeDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<InputChangeDirective, "[inputChange]", never, { "min": { "alias": "min"; "required": false; }; "max": { "alias": "max"; "required": false; }; }, { "inputChange": "inputChange"; }, never, never, false, never>;
    static ngAcceptInputType_min: unknown;
    static ngAcceptInputType_max: unknown;
}
