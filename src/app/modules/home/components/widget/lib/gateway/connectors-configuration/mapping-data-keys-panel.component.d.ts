import { EventEmitter, OnInit } from '@angular/core';
import { AbstractControl, UntypedFormArray, UntypedFormBuilder } from '@angular/forms';
import { DataKeyType } from '@shared/models/telemetry/telemetry.models';
import { TbPopoverComponent } from '@shared/components/popover.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { PageComponent } from '@shared/components/page.component';
import { MappingDataKey, MappingKeysType, MappingValueType } from '@home/components/widget/lib/gateway/gateway-widget.models';
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
    keysType: string;
    rawData: boolean;
    popover: TbPopoverComponent<MappingDataKeysPanelComponent>;
    keysDataApplied: EventEmitter<MappingDataKey[] | {
        [key: string]: any;
    }>;
    valueTypeKeys: MappingValueType[];
    MappingKeysType: typeof MappingKeysType;
    valueTypeEnum: typeof MappingValueType;
    valueTypes: Map<MappingValueType, import("../../../../../../../shared/public-api").ValueTypeData>;
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
    valueTitle(value: any): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<MappingDataKeysPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MappingDataKeysPanelComponent, "tb-mapping-data-keys-panel", never, { "panelTitle": "panelTitle"; "addKeyTitle": "addKeyTitle"; "deleteKeyTitle": "deleteKeyTitle"; "noKeysText": "noKeysText"; "keys": "keys"; "keysType": "keysType"; "rawData": "rawData"; "popover": "popover"; }, { "keysDataApplied": "keysDataApplied"; }, never, never, false, never>;
}
