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
    triggerSafeHtml: SafeHtml;
    textMode: boolean;
    constructor(viewContainerRef: ViewContainerRef, element: ElementRef<HTMLElement>, sanitizer: DomSanitizer, renderer: Renderer2, popoverService: TbPopoverService, wl: WhiteLabelingService);
    ngOnChanges(changes: SimpleChanges): void;
    toggleHelp(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<HelpPopupComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HelpPopupComponent, "[tb-help-popup], [tb-help-popup-content]", never, { "helpId": "tb-help-popup"; "helpContent": "tb-help-popup-content"; "triggerText": "trigger-text"; "triggerStyle": "trigger-style"; "helpPopupPlacement": "tb-help-popup-placement"; "helpPopupStyle": "tb-help-popup-style"; }, {}, never, never>;
}
