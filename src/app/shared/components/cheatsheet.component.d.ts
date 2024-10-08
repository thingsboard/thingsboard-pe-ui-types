import { ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Hotkey, HotkeysService } from 'angular2-hotkeys';
import * as i0 from "@angular/core";
export declare class TbCheatSheetComponent implements OnInit, OnDestroy {
    private elementRef;
    private hotkeysService;
    helpVisible: boolean;
    title: string;
    hotkeys: Hotkey[];
    hotkeysList: Hotkey[];
    private mousetrap;
    constructor(elementRef: ElementRef, hotkeysService: HotkeysService);
    ngOnInit(): void;
    setHotKeys(hotkeys: Hotkey[]): void;
    toggleCheatSheet(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TbCheatSheetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TbCheatSheetComponent, "tb-hotkeys-cheatsheet", never, { "title": { "alias": "title"; "required": false; }; "hotkeys": { "alias": "hotkeys"; "required": false; }; }, {}, never, never, false, never>;
}
