import { ControlValueAccessor, FormBuilder, FormGroup, Validator } from '@angular/forms';
import { SubscriptSizing } from '@angular/material/form-field';
import * as i0 from "@angular/core";
interface MessageType {
    name: string;
    value: string;
}
export declare class OutputMessageTypeAutocompleteComponent implements ControlValueAccessor, Validator {
    private fb;
    subscriptSizing: SubscriptSizing;
    disabled: boolean;
    set required(value: boolean);
    get required(): boolean;
    messageTypeFormGroup: FormGroup;
    messageTypes: MessageType[];
    private modelValue;
    private requiredValue;
    private propagateChange;
    constructor(fb: FormBuilder);
    registerOnTouched(_fn: any): void;
    registerOnChange(fn: any): void;
    writeValue(value: string | null): void;
    validate(): {
        messageTypeInvalid: boolean;
    };
    setDisabledState(isDisabled: boolean): void;
    private updateView;
    private updateValidators;
    private updateMessageTypeValue;
    static ɵfac: i0.ɵɵFactoryDeclaration<OutputMessageTypeAutocompleteComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OutputMessageTypeAutocompleteComponent, "tb-output-message-type-autocomplete", never, { "subscriptSizing": { "alias": "subscriptSizing"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "required": { "alias": "required"; "required": false; }; }, {}, never, never, false, never>;
}
export {};
