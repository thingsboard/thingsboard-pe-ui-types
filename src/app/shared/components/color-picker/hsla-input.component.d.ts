import { EventEmitter } from '@angular/core';
import { Color } from '@iplab/ngx-color-picker';
import * as i0 from "@angular/core";
type Channel = 'H' | 'S' | 'L';
export declare class HslaInputComponent {
    color: Color;
    colorChange: EventEmitter<Color>;
    labelVisible: boolean;
    suffixValue: string;
    alpha: boolean;
    get value(): ReturnType<Color['getHsla']>;
    get alphaValue(): number;
    onAlphaInputChange(inputValue: number): void;
    onInputChange(newValue: number, channel: Channel): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<HslaInputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HslaInputComponent, "tb-hsla-input", never, { "color": { "alias": "color"; "required": false; }; "labelVisible": { "alias": "labelVisible"; "required": false; }; "suffixValue": { "alias": "suffixValue"; "required": false; }; "alpha": { "alias": "alpha"; "required": false; }; }, { "colorChange": "colorChange"; }, never, never, false, never>;
}
export {};
