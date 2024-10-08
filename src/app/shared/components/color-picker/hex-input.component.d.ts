import { EventEmitter } from '@angular/core';
import { Color } from '@iplab/ngx-color-picker';
import * as i0 from "@angular/core";
export declare class HexInputComponent {
    color: Color;
    colorChange: EventEmitter<Color>;
    labelVisible: boolean;
    prefixValue: string;
    get value(): string;
    get copyColor(): string;
    get hueValue(): string;
    onHueInputChange(event: KeyboardEvent, inputValue: string): void;
    onInputChange(event: KeyboardEvent, inputValue: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<HexInputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HexInputComponent, "tb-hex-input", never, { "color": { "alias": "color"; "required": false; }; "labelVisible": { "alias": "labelVisible"; "required": false; }; "prefixValue": { "alias": "prefixValue"; "required": false; }; }, { "colorChange": "colorChange"; }, never, never, false, never>;
}
