import { ElementRef, OnChanges, OnDestroy, Renderer2, SimpleChanges, ViewContainerRef } from '@angular/core';
import { TbPopoverService } from '@shared/components/popover.service';
import { PopoverPlacement } from '@shared/components/popover.models';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { WhiteLabelingService } from '@core/http/white-labeling.service';
import * as i0 from "@angular/core";
export declare class HelpPopupComponent implements OnChanges, OnDestroy {
    private viewContainerRef;
    private element;
    private sanitizer;
    private renderer;
    private popoverService;
    wl: WhiteLabelingService;
    toggleHelpButton: ElementRef;
    toggleHelpTextButton: ElementRef;
    helpId: string;
    helpContent: string;
    triggerText: string;
    triggerStyle: string;
    helpPopupPlacement: PopoverPlacement;
    helpPopupStyle: {
        [klass: string]: any;
    };
    popoverVisible: boolean;
    popoverReady: boolean;
    hintMode: boolean;
    triggerSafeHtml: SafeHtml;
    textMode: boolean;
    constructor(viewContainerRef: ViewContainerRef, element: ElementRef<HTMLElement>, sanitizer: DomSanitizer, renderer: Renderer2, popoverService: TbPopoverService, wl: WhiteLabelingService);
    ngOnChanges(changes: SimpleChanges): void;
    toggleHelp(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<HelpPopupComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HelpPopupComponent, "[tb-help-popup], [tb-help-popup-content]", never, { "helpId": { "alias": "tb-help-popup"; "required": false; }; "helpContent": { "alias": "tb-help-popup-content"; "required": false; }; "triggerText": { "alias": "trigger-text"; "required": false; }; "triggerStyle": { "alias": "trigger-style"; "required": false; }; "helpPopupPlacement": { "alias": "tb-help-popup-placement"; "required": false; }; "helpPopupStyle": { "alias": "tb-help-popup-style"; "required": false; }; "hintMode": { "alias": "hintMode"; "required": false; }; }, {}, never, never, false, never>;
}
