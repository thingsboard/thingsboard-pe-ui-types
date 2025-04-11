import { ElementRef, OnInit } from '@angular/core';
import { LinkLabel, PageComponent, TruncatePipe } from '@shared/public-api';
import { ControlValueAccessor, FormBuilder, FormGroup } from '@angular/forms';
import { MatChipGrid, MatChipInputEvent } from '@angular/material/chips';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export declare class MessageTypesConfigComponent extends PageComponent implements ControlValueAccessor, OnInit {
    translate: TranslateService;
    truncate: TruncatePipe;
    private fb;
    messageTypeConfigForm: FormGroup;
    private requiredValue;
    get required(): boolean;
    set required(value: boolean);
    label: string;
    placeholder: string;
    disabled: boolean;
    chipList: MatChipGrid;
    matAutocomplete: MatAutocomplete;
    messageTypeInput: ElementRef<HTMLInputElement>;
    separatorKeysCodes: number[];
    filteredMessageTypes: Observable<Array<LinkLabel>>;
    messageTypes: Array<LinkLabel>;
    private messageTypesList;
    searchText: string;
    private propagateChange;
    constructor(translate: TranslateService, truncate: TruncatePipe, fb: FormBuilder);
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    ngOnInit(): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: Array<string> | null): void;
    displayMessageTypeFn(messageType?: LinkLabel): string | undefined;
    textIsNotEmpty(text: string): boolean;
    createMessageType($event: Event, value: string): void;
    add(event: MatChipInputEvent): void;
    private fetchMessageTypes;
    private transformMessageType;
    remove(messageType: LinkLabel): void;
    selected(event: MatAutocompleteSelectedEvent): void;
    addMessageType(messageType: LinkLabel): void;
    onFocus(): void;
    clear(value?: string): void;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<MessageTypesConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MessageTypesConfigComponent, "tb-message-types-config", never, { "required": { "alias": "required"; "required": false; }; "label": { "alias": "label"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, false, never>;
}
