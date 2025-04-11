import { DestroyRef, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup } from '@angular/forms';
import { PageComponent } from '@shared/components/page.component';
import { EntitySearchDirection } from '@app/shared/models/relation.models';
import { EntityType } from '@shared/models/entity-type.models';
import * as i0 from "@angular/core";
interface DeviceRelationsQuery {
    fetchLastLevelOnly: boolean;
    direction: EntitySearchDirection;
    maxLevel?: number;
    relationType?: string;
    deviceTypes: string[];
}
export declare class DeviceRelationsQueryConfigComponent extends PageComponent implements ControlValueAccessor, OnInit {
    private fb;
    private destroyRef;
    disabled: boolean;
    private requiredValue;
    get required(): boolean;
    set required(value: boolean);
    directionTypes: Array<EntitySearchDirection>;
    directionTypeTranslations: Map<EntitySearchDirection, string>;
    entityType: typeof EntityType;
    deviceRelationsQueryFormGroup: FormGroup;
    private propagateChange;
    constructor(fb: FormBuilder, destroyRef: DestroyRef);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(query: DeviceRelationsQuery): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DeviceRelationsQueryConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DeviceRelationsQueryConfigComponent, "tb-device-relations-query-config", never, { "disabled": { "alias": "disabled"; "required": false; }; "required": { "alias": "required"; "required": false; }; }, {}, never, never, false, never>;
}
export {};
