import { ElementRef, EventEmitter, OnDestroy } from '@angular/core';
import { TbContextMenuEvent } from '@shared/models/jquery-event.models';
import * as i0 from "@angular/core";
export declare class ContextMenuDirective implements OnDestroy {
    private el;
    tbcontextmenu: EventEmitter<TbContextMenuEvent>;
    constructor(el: ElementRef);
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ContextMenuDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ContextMenuDirective, "[tbcontextmenu]", never, {}, { "tbcontextmenu": "tbcontextmenu"; }, never, never, false, never>;
}
