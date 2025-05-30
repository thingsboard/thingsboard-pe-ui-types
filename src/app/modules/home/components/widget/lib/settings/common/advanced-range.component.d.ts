import { DestroyRef, EventEmitter, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { IAliasController } from '@core/api/widget-api.models';
import { AdvancedColorRange } from '@shared/models/widget-settings.models';
import { DataKeysCallbacks } from '@home/components/widget/lib/settings/common/key/data-keys.component.models';
import { Datasource } from '@shared/models/widget.models';
import * as i0 from "@angular/core";
export declare class AdvancedRangeComponent extends PageComponent implements OnInit, ControlValueAccessor {
    protected store: Store<AppState>;
    private fb;
    private destroyRef;
    disabled: boolean;
    aliasController: IAliasController;
    dataKeyCallbacks: DataKeysCallbacks;
    datasource: Datasource;
    removeAdvancedRange: EventEmitter<any>;
    private modelValue;
    private propagateChange;
    advancedRangeLevelFormGroup: UntypedFormGroup;
    constructor(store: Store<AppState>, fb: UntypedFormBuilder, destroyRef: DestroyRef);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: AdvancedColorRange): void;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<AdvancedRangeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AdvancedRangeComponent, "tb-advanced-range", never, { "disabled": { "alias": "disabled"; "required": false; }; "aliasController": { "alias": "aliasController"; "required": false; }; "dataKeyCallbacks": { "alias": "dataKeyCallbacks"; "required": false; }; "datasource": { "alias": "datasource"; "required": false; }; }, { "removeAdvancedRange": "removeAdvancedRange"; }, never, never, false, never>;
}
