import { ElementRef, OnDestroy, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export declare class EllipsisChipListDirective implements OnDestroy {
    private el;
    private renderer;
    private translate;
    private window;
    chipsValue: string[];
    private destroy$;
    private intersectionObserver;
    set chips(value: string[]);
    constructor(el: ElementRef, renderer: Renderer2, translate: TranslateService, window: Window);
    private observeIntersection;
    private adjustChips;
    private applyMaxChipTextWidth;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EllipsisChipListDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<EllipsisChipListDirective, "[tb-ellipsis-chip-list]", never, { "chips": { "alias": "tb-ellipsis-chip-list"; "required": false; }; }, {}, never, never, true, never>;
}
