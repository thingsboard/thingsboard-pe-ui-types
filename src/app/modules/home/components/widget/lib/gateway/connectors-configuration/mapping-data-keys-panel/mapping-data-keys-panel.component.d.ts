import { EventEmitter, OnInit } from '@angular/core';
import { AbstractControl, FormControl, UntypedFormArray, UntypedFormBuilder } from '@angular/forms';
import { DataKeyType } from '@shared/models/telemetry/telemetry.models';
import { TbPopoverComponent } from '@shared/components/popover.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { PageComponent } from '@shared/components/page.component';
import { MappingDataKey, MappingKeysType, MappingValueType, OPCUaSourceType } from '@home/components/widget/lib/gateway/gateway-widget.models';
import * as i0 from "@angular/core";
export declare class MappingDataKeysPanelComponent extends PageComponent implements OnInit {
    private fb;
    protected store: Store<AppState>;
    panelTitle: string;
    addKeyTitle: string;
    deleteKeyTitle: string;
    noKeysText: string;
    keys: Array<MappingDataKey> | {
        [key: string]: any;
    };
    keysType: MappingKeysType;
    valueTypeKeys: Array<MappingValueType | OPCUaSourceType>;
    valueTypeEnum: typeof MappingValueType;
    valueTypes: Map<string, any>;
    rawData: boolean;
    popover: TbPopoverComponent<MappingDataKeysPanelComponent>;
    keysDataApplied: EventEmitter<MappingDataKey[] | {
        [key: string]: unknown;
    }>;
    MappingKeysType: typeof MappingKeysType;
    dataKeyType: DataKeyType;
    keysListFormArray: UntypedFormArray;
    errorText: string;
    constructor(fb: UntypedFormBuilder, store: Store<AppState>);
    ngOnInit(): void;
    trackByKey(index: number, keyControl: AbstractControl): any;
    addKey(): void;
    deleteKey($event: Event, index: number): void;
    cancel(): void;
    applyKeysData(): void;
    private prepareKeysFormArray;
    valueTitle(keyControl: FormControl): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<MappingDataKeysPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MappingDataKeysPanelComponent, "tb-mapping-data-keys-panel", never, { "panelTitle": { "alias": "panelTitle"; "required": false; }; "addKeyTitle": { "alias": "addKeyTitle"; "required": false; }; "deleteKeyTitle": { "alias": "deleteKeyTitle"; "required": false; }; "noKeysText": { "alias": "noKeysText"; "required": false; }; "keys": { "alias": "keys"; "required": false; }; "keysType": { "alias": "keysType"; "required": false; }; "valueTypeKeys": { "alias": "valueTypeKeys"; "required": false; }; "valueTypeEnum": { "alias": "valueTypeEnum"; "required": false; }; "valueTypes": { "alias": "valueTypes"; "required": false; }; "rawData": { "alias": "rawData"; "required": false; }; "popover": { "alias": "popover"; "required": false; }; }, { "keysDataApplied": "keysDataApplied"; }, never, never, false, never>;
}
