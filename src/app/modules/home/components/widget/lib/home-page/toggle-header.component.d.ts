import { ChangeDetectorRef, EventEmitter, OnInit } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { BreakpointObserver } from '@angular/cdk/layout';
import * as i0 from "@angular/core";
export interface ToggleHeaderOption {
    name: string;
    value: any;
}
export declare class ToggleHeaderComponent extends PageComponent implements OnInit {
    protected store: Store<AppState>;
    private cd;
    private breakpointObserver;
    value: any;
    valueChange: EventEmitter<any>;
    options: ToggleHeaderOption[];
    name: string;
    useSelectOnMdLg: boolean;
    isMdLg: boolean;
    private observeBreakpointSubscription;
    constructor(store: Store<AppState>, cd: ChangeDetectorRef, breakpointObserver: BreakpointObserver);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ToggleHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ToggleHeaderComponent, "tb-toggle-header", never, { "value": "value"; "options": "options"; "name": "name"; "useSelectOnMdLg": "useSelectOnMdLg"; }, { "valueChange": "valueChange"; }, never, never, false, never>;
}
