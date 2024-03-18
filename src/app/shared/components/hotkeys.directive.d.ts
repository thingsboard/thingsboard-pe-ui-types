import { ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Hotkey } from 'angular2-hotkeys';
import { TbCheatSheetComponent } from '@shared/components/cheatsheet.component';
import * as i0 from "@angular/core";
export declare class TbHotkeysDirective implements OnInit, OnDestroy {
    private elementRef;
    hotkeys: Hotkey[];
    cheatSheet: TbCheatSheetComponent;
    private mousetrap;
    private hotkeysList;
    private preventIn;
    constructor(elementRef: ElementRef);
    ngOnInit(): void;
    private bindEvent;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TbHotkeysDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TbHotkeysDirective, "[tb-hotkeys]", never, { "hotkeys": "tb-hotkeys"; "cheatSheet": "cheatSheet"; }, {}, never, never, false, never>;
}
