import { EventEmitter, OnDestroy } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { EntityId } from '@shared/models/id/entity-id';
import { EntityType } from '@shared/models/entity-type.models';
import { EntityGroupInfo } from '@shared/models/entity-group.models';
import { DeviceProfileInfo } from '@shared/models/device.models';
import { DeviceId } from '@shared/models/id/device-id';
import { DeviceProfileId } from '@shared/models/id/device-profile-id';
import { EntityGroupId } from '@shared/models/id/entity-group-id';
import * as i0 from "@angular/core";
type TargetType = 'entity' | 'deviceProfile' | 'groupTenant' | 'ownerGroup';
interface FormValue {
    target: TargetType;
    deviceTargetId: DeviceId;
    deviceProfileTargetId: DeviceProfileId;
    groupOriginatorId: EntityGroupId;
    groupOwnerId: EntityGroupId;
}
export declare class TargetSelectComponent implements ControlValueAccessor, OnDestroy {
    private store;
    translate: TranslateService;
    private fb;
    targetFormGroup: UntypedFormGroup;
    entityType: EntityType;
    currentUser: import("../../../../../shared/public-api").AuthUser;
    headerOptions: {
        name: any;
        value: string;
    }[];
    private modelValue;
    private destroy$;
    private loadData;
    private requiredValue;
    get required(): boolean;
    set required(value: boolean);
    disabled: boolean;
    currentEntity: EventEmitter<EntityId | EntityGroupInfo>;
    private propagateChange;
    constructor(store: Store<AppState>, translate: TranslateService, fb: UntypedFormBuilder);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnDestroy(): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: EntityId | null): void;
    entityGroupLoaded(entityGroup: EntityGroupInfo): void;
    deviceProfileLoaded(deviceProfileInfo: DeviceProfileInfo): void;
    deviceLoaded(device: any): void;
    updateView(value: FormValue | null): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TargetSelectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TargetSelectComponent, "tb-target-select", never, { "required": { "alias": "required"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, { "currentEntity": "currentEntity"; }, never, never, false, never>;
}
export {};
