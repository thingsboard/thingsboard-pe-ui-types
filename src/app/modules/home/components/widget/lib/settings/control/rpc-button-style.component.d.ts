import { OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import * as i0 from "@angular/core";
export interface RpcButtonStyle {
    isRaised: boolean;
    isPrimary: boolean;
    bgColor: string;
    textColor: string;
}
export declare class RpcButtonStyleComponent extends PageComponent implements OnInit, ControlValueAccessor {
    protected store: Store<AppState>;
    private fb;
    disabled: boolean;
    private modelValue;
    private propagateChange;
    rpcButtonStyleFormGroup: UntypedFormGroup;
    constructor(store: Store<AppState>, fb: UntypedFormBuilder);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: RpcButtonStyle): void;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<RpcButtonStyleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RpcButtonStyleComponent, "tb-rpc-button-style", never, { "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, false, never>;
}
