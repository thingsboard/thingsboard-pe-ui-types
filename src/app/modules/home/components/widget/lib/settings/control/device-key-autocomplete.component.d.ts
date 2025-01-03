import { DestroyRef, ElementRef, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { AttributeScope, DataKeyType } from '@shared/models/telemetry/telemetry.models';
import { Observable } from 'rxjs';
import { IAliasController } from '@core/api/widget-api.models';
import { TargetDevice } from '@shared/models/widget.models';
import { EntityService } from '@core/http/entity.service';
import * as i0 from "@angular/core";
export declare class DeviceKeyAutocompleteComponent extends PageComponent implements OnInit, ControlValueAccessor, OnChanges {
    protected store: Store<AppState>;
    private entityService;
    private fb;
    private destroyRef;
    keyInput: ElementRef;
    disabled: boolean;
    aliasController: IAliasController;
    targetDevice: TargetDevice;
    keyType: DataKeyType;
    attributeScope: AttributeScope;
    attributeLabel: string;
    timeseriesLabel: string;
    requiredText: string;
    required: boolean;
    inlineField: boolean;
    dataKeyType: typeof DataKeyType;
    private modelValue;
    private propagateChange;
    deviceKeyFormGroup: UntypedFormGroup;
    filteredKeys: Observable<Array<string>>;
    keySearchText: string;
    private latestKeySearchResult;
    private keysFetchObservable$;
    constructor(store: Store<AppState>, entityService: EntityService, fb: UntypedFormBuilder, destroyRef: DestroyRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: string): void;
    clearKey(): void;
    onFocus(): void;
    private updateModel;
    private clearKeysCache;
    private fetchKeys;
    private getKeys;
    private fetchEntityKeys;
    private createKeyFilter;
    static ɵfac: i0.ɵɵFactoryDeclaration<DeviceKeyAutocompleteComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DeviceKeyAutocompleteComponent, "tb-device-key-autocomplete", never, { "disabled": { "alias": "disabled"; "required": false; }; "aliasController": { "alias": "aliasController"; "required": false; }; "targetDevice": { "alias": "targetDevice"; "required": false; }; "keyType": { "alias": "keyType"; "required": false; }; "attributeScope": { "alias": "attributeScope"; "required": false; }; "attributeLabel": { "alias": "attributeLabel"; "required": false; }; "timeseriesLabel": { "alias": "timeseriesLabel"; "required": false; }; "requiredText": { "alias": "requiredText"; "required": false; }; "required": { "alias": "required"; "required": false; }; "inlineField": { "alias": "inlineField"; "required": false; }; }, {}, never, never, false, never>;
}
