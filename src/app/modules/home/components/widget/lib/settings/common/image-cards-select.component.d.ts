import { AfterContentInit, ElementRef, OnChanges, OnDestroy, OnInit, QueryList, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, UntypedFormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';
import { SafeUrl } from '@angular/platform-browser';
import * as i0 from "@angular/core";
export interface ImageCardsSelectOption {
    name: string;
    value: any;
    image: string | SafeUrl;
}
export interface ImageCardsColumns {
    columns: number;
    breakpoints?: {
        [breakpoint: string]: number;
    };
}
export declare class ImageCardsSelectOptionDirective {
    private _element;
    value: any;
    image: string | SafeUrl;
    get viewValue(): string;
    constructor(_element: ElementRef<HTMLElement>);
    static ɵfac: i0.ɵɵFactoryDeclaration<ImageCardsSelectOptionDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ImageCardsSelectOptionDirective, "tb-image-cards-select-option", never, { "value": { "alias": "value"; "required": false; }; "image": { "alias": "image"; "required": false; }; }, {}, never, never, false, never>;
}
export declare class ImageCardsSelectComponent implements ControlValueAccessor, OnInit, OnChanges, AfterContentInit, OnDestroy {
    private breakpointObserver;
    imageCardsSelectOptions: QueryList<ImageCardsSelectOptionDirective>;
    disabled: boolean;
    cols: ImageCardsColumns | number;
    rowHeight: string;
    label: string;
    valueFormControl: UntypedFormControl;
    options: ImageCardsSelectOption[];
    modelValue: any;
    expanded: boolean;
    cols$: Observable<number>;
    private propagateChange;
    private _destroyed;
    constructor(breakpointObserver: BreakpointObserver);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    private _initCols;
    private _detectColumns;
    private syncImageCardsSelectOptions;
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: any): void;
    updateModel(value: any): void;
    toggleSelectPanel($event: Event): void;
    private updateDisplayValue;
    static ɵfac: i0.ɵɵFactoryDeclaration<ImageCardsSelectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ImageCardsSelectComponent, "tb-image-cards-select", never, { "disabled": { "alias": "disabled"; "required": false; }; "cols": { "alias": "cols"; "required": false; }; "rowHeight": { "alias": "rowHeight"; "required": false; }; "label": { "alias": "label"; "required": false; }; }, {}, ["imageCardsSelectOptions"], never, false, never>;
}
