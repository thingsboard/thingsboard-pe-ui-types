import { MarkedOptions, MarkedRenderer } from 'ngx-markdown';
import { TranslateService } from '@ngx-translate/core';
import { Clipboard } from '@angular/cdk/clipboard';
import * as i0 from "@angular/core";
export declare class MarkedOptionsService implements MarkedOptions {
    private translate;
    private clipboardService;
    private readonly window;
    private readonly document;
    renderer: MarkedRenderer;
    headerIds: boolean;
    gfm: boolean;
    breaks: boolean;
    pedantic: boolean;
    smartLists: boolean;
    smartypants: boolean;
    mangle: boolean;
    private renderer2;
    private id;
    constructor(translate: TranslateService, clipboardService: Clipboard, window: Window, document: Document);
    private wrapDiv;
    private wrapCopyCode;
    private onSelectionChange;
    private getSelectedText;
    private markdownCopyCode;
    static ɵfac: i0.ɵɵFactoryDeclaration<MarkedOptionsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MarkedOptionsService>;
}
