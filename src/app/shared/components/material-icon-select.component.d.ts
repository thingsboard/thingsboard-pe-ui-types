import { OnInit } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { ControlValueAccessor, FormBuilder, FormGroup } from '@angular/forms';
import { DialogService } from '@core/services/dialog.service';
import * as i0 from "@angular/core";
export declare class MaterialIconSelectComponent extends PageComponent implements OnInit, ControlValueAccessor {
    protected store: Store<AppState>;
    private dialogs;
    private fb;
    disabled: boolean;
    private modelValue;
    private propagateChange;
    materialIconFormGroup: FormGroup;
    constructor(store: Store<AppState>, dialogs: DialogService, fb: FormBuilder);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: string): void;
    private updateModel;
    openIconDialog(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MaterialIconSelectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MaterialIconSelectComponent, "tb-material-icon-select", never, { "disabled": "disabled"; }, {}, never, never>;
}
