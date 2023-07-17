import { AfterContentInit, ChangeDetectorRef, ElementRef, EventEmitter, OnDestroy, OnInit, QueryList } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { BreakpointObserver } from '@angular/cdk/layout';
import * as i0 from "@angular/core";
export interface ToggleHeaderOption {
    name: string;
    value: any;
}
export type ToggleHeaderAppearance = 'fill' | 'fill-invert' | 'stroked';
export declare class ToggleOption {
    private _element;
    value: any;
    get viewValue(): string;
    constructor(_element: ElementRef<HTMLElement>);
    static ɵfac: i0.ɵɵFactoryDeclaration<ToggleOption, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ToggleOption, "tb-toggle-option", never, { "value": "value"; }, {}, never, never, false, never>;
}
export declare abstract class _ToggleBase extends PageComponent implements AfterContentInit, OnDestroy {
    protected store: Store<AppState>;
    toggleOptions: QueryList<ToggleOption>;
    options: ToggleHeaderOption[];
    private _destroyed;
    protected constructor(store: Store<AppState>);
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    private syncToggleHeaderOptions;
    static ɵfac: i0.ɵɵFactoryDeclaration<_ToggleBase, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<_ToggleBase, never, never, { "options": "options"; }, {}, ["toggleOptions"], never, false, never>;
}
export declare class ToggleHeaderComponent extends _ToggleBase implements OnInit, AfterContentInit, OnDestroy {
    protected store: Store<AppState>;
    private cd;
    private breakpointObserver;
    value: any;
    valueChange: EventEmitter<any>;
    name: string;
    useSelectOnMdLg: boolean;
    ignoreMdLgSize: boolean;
    appearance: ToggleHeaderAppearance;
    disabled: boolean;
    isMdLg: boolean;
    private observeBreakpointSubscription;
    constructor(store: Store<AppState>, cd: ChangeDetectorRef, breakpointObserver: BreakpointObserver);
    ngOnInit(): void;
    trackByHeaderOption(index: number, option: ToggleHeaderOption): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<ToggleHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ToggleHeaderComponent, "tb-toggle-header", never, { "value": "value"; "name": "name"; "useSelectOnMdLg": "useSelectOnMdLg"; "ignoreMdLgSize": "ignoreMdLgSize"; "appearance": "appearance"; "disabled": "disabled"; }, { "valueChange": "valueChange"; }, never, never, false, never>;
}
