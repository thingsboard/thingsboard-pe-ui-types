import { EventEmitter, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export interface GaugeHighlight {
    from: number;
    to: number;
    color: string;
}
export declare class GaugeHighlightComponent extends PageComponent implements OnInit, ControlValueAccessor {
    protected store: Store<AppState>;
    private translate;
    private fb;
    disabled: boolean;
    expanded: boolean;
    removeHighlight: EventEmitter<any>;
    private modelValue;
    private propagateChange;
    gaugeHighlightFormGroup: UntypedFormGroup;
    constructor(store: Store<AppState>, translate: TranslateService, fb: UntypedFormBuilder);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: GaugeHighlight): void;
    highlightRangeText(): string;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<GaugeHighlightComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GaugeHighlightComponent, "tb-gauge-highlight", never, { "disabled": "disabled"; "expanded": "expanded"; }, { "removeHighlight": "removeHighlight"; }, never, never, false>;
}
