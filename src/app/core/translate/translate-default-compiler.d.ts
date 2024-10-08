import { MessageFormatConfig, TranslateMessageFormatCompiler } from 'ngx-translate-messageformat-compiler';
import * as i0 from "@angular/core";
export declare class TranslateDefaultCompiler extends TranslateMessageFormatCompiler {
    constructor(config?: MessageFormatConfig);
    compile(value: string, lang: string): any;
    compileTranslations(translations: any, lang: string): any;
    private defaultCompile;
    private checkIsPlural;
    static ɵfac: i0.ɵɵFactoryDeclaration<TranslateDefaultCompiler, [{ optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TranslateDefaultCompiler>;
}
