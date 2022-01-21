import { TranslateParser } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export declare class TranslateDefaultParser extends TranslateParser {
    templateMatcher: RegExp;
    interpolate(expr: string | Function, params?: any): string;
    getValue(target: any, key: string): any;
    private interpolateFunction;
    private interpolateString;
    static ɵfac: i0.ɵɵFactoryDeclaration<TranslateDefaultParser, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TranslateDefaultParser>;
}
