import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, OnDestroy, OnInit, QueryList } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Subject } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Platform } from '@angular/cdk/platform';
import { MatButtonToggleGroup } from '@angular/material/button-toggle';
import * as i0 from "@angular/core";
export interface ToggleHeaderOption {
    name: string;
    value: any;
}
export type ToggleHeaderAppearance = 'fill' | 'fill-invert' | 'stroked';
export type ScrollDirection = 'after' | 'before';
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
    protected _destroyed: Subject<void>;
    protected constructor(store: Store<AppState>);
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    private syncToggleHeaderOptions;
    static ɵfac: i0.ɵɵFactoryDeclaration<_ToggleBase, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<_ToggleBase, never, never, { "options": "options"; }, {}, ["toggleOptions"], never, false, never>;
}
export declare class ToggleHeaderComponent extends _ToggleBase implements OnInit, AfterViewInit, AfterContentInit, AfterContentChecked, AfterViewChecked, OnDestroy {
    protected store: Store<AppState>;
    private cd;
    private platform;
    private breakpointObserver;
    toggleGroup: ElementRef<HTMLElement>;
    buttonToggleGroup: MatButtonToggleGroup;
    toggleGroupContainer: ElementRef<HTMLElement>;
    private showPaginationControls;
    private _showPaginationControlsChanged;
    private toggleGroupResize$;
    leftPaginationEnabled: boolean;
    rightPaginationEnabled: boolean;
    private _scrollDistance;
    private _scrollDistanceChanged;
    get scrollDistance(): number;
    set scrollDistance(value: number);
    value: any;
    valueChange: EventEmitter<any>;
    name: string;
    disablePagination: boolean;
    selectMediaBreakpoint: string;
    set useSelectOnMdLg(value: boolean);
    ignoreMdLgSize: boolean;
    appearance: ToggleHeaderAppearance;
    disabled: boolean;
    get isMdLg(): boolean;
    private isMdLgValue;
    private useSelectSubject;
    useSelect$: import("rxjs").Observable<boolean>;
    private observeBreakpointSubscription;
    constructor(store: Store<AppState>, cd: ChangeDetectorRef, platform: Platform, breakpointObserver: BreakpointObserver);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
    ngAfterContentChecked(): void;
    ngAfterViewChecked(): void;
    trackByHeaderOption(index: number, option: ToggleHeaderOption): any;
    handlePaginatorClick(direction: ScrollDirection, $event: Event): void;
    handlePaginatorTouchStart(direction: ScrollDirection, $event: Event): void;
    private startObservePagination;
    private removePagination;
    private stopObservePagination;
    private scrollHeader;
    private scrollToToggleOptionValue;
    private updatePagination;
    private checkPaginationEnabled;
    private checkPaginationControls;
    private getMaxScrollDistance;
    private _scrollTo;
    private updateToggleHeaderScrollPosition;
    static ɵfac: i0.ɵɵFactoryDeclaration<ToggleHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ToggleHeaderComponent, "tb-toggle-header", never, { "value": "value"; "name": "name"; "disablePagination": "disablePagination"; "selectMediaBreakpoint": "selectMediaBreakpoint"; "useSelectOnMdLg": "useSelectOnMdLg"; "ignoreMdLgSize": "ignoreMdLgSize"; "appearance": "appearance"; "disabled": "disabled"; }, { "valueChange": "valueChange"; }, never, never, false, never>;
}
