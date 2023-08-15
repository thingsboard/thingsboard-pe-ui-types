import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { ControlValueAccessor } from '@angular/forms';
import { _ToggleBase, ToggleHeaderAppearance } from '@shared/components/toggle-header.component';
import * as i0 from "@angular/core";
export declare class ToggleSelectComponent extends _ToggleBase implements ControlValueAccessor {
    protected store: Store<AppState>;
    get maxWidth(): string;
    disabled: boolean;
    selectMediaBreakpoint: any;
    appearance: ToggleHeaderAppearance;
    disablePagination: boolean;
    modelValue: any;
    private propagateChange;
    constructor(store: Store<AppState>);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: any): void;
    updateModel(value: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ToggleSelectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ToggleSelectComponent, "tb-toggle-select", never, { "disabled": "disabled"; "selectMediaBreakpoint": "selectMediaBreakpoint"; "appearance": "appearance"; "disablePagination": "disablePagination"; }, {}, never, never, false, never>;
}
