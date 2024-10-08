import { EventEmitter, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { WidgetFont } from '@home/components/widget/lib/settings/common/widget-font.component';
import * as i0 from "@angular/core";
export interface LabelWidgetLabel {
    pattern: string;
    x: number;
    y: number;
    backgroundColor: string;
    font: WidgetFont;
}
export declare class LabelWidgetLabelComponent extends PageComponent implements OnInit, ControlValueAccessor {
    protected store: Store<AppState>;
    private translate;
    private fb;
    disabled: boolean;
    expanded: boolean;
    removeLabel: EventEmitter<any>;
    private modelValue;
    private propagateChange;
    labelWidgetLabelFormGroup: UntypedFormGroup;
    constructor(store: Store<AppState>, translate: TranslateService, fb: UntypedFormBuilder);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: LabelWidgetLabel): void;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<LabelWidgetLabelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LabelWidgetLabelComponent, "tb-label-widget-label", never, { "disabled": { "alias": "disabled"; "required": false; }; "expanded": { "alias": "expanded"; "required": false; }; }, { "removeLabel": "removeLabel"; }, never, never, false, never>;
}
