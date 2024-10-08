import { ChangeDetectorRef, EventEmitter } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { TooltipPosition } from '@angular/material/tooltip';
import { TranslateService } from '@ngx-translate/core';
import { ThemePalette } from '@angular/material/core';
import * as i0 from "@angular/core";
export declare class CopyButtonComponent {
    private clipboardService;
    private translate;
    private cd;
    private timer;
    copied: boolean;
    copyText: string;
    disabled: boolean;
    mdiIcon: string;
    icon: string;
    tooltipText: string;
    tooltipPosition: TooltipPosition;
    style: {
        [key: string]: any;
    };
    color: ThemePalette;
    miniButton: boolean;
    successCopied: EventEmitter<string>;
    constructor(clipboardService: ClipboardService, translate: TranslateService, cd: ChangeDetectorRef);
    copy($event: Event): void;
    get matTooltipText(): string;
    get matTooltipPosition(): TooltipPosition;
    static ɵfac: i0.ɵɵFactoryDeclaration<CopyButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CopyButtonComponent, "tb-copy-button", never, { "copyText": { "alias": "copyText"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "mdiIcon": { "alias": "mdiIcon"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "tooltipText": { "alias": "tooltipText"; "required": false; }; "tooltipPosition": { "alias": "tooltipPosition"; "required": false; }; "style": { "alias": "style"; "required": false; }; "color": { "alias": "color"; "required": false; }; "miniButton": { "alias": "miniButton"; "required": false; }; }, { "successCopied": "successCopied"; }, never, never, false, never>;
}
