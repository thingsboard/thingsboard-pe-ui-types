import { DestroyRef, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntityTabsComponent } from '../../components/entity/entity-tabs.component';
import { DeviceProfile, DeviceTransportType } from '@shared/models/device.models';
import { UserPermissionsService } from "@core/http/user-permissions.service";
import * as i0 from "@angular/core";
export declare class DeviceProfileTabsComponent extends EntityTabsComponent<DeviceProfile> implements OnInit {
    protected store: Store<AppState>;
    private destroyRef;
    private userPermissionsService;
    deviceTransportTypes: DeviceTransportType[];
    deviceTransportTypeTranslations: Map<import("@shared/models/device.models").TransportType, string>;
    deviceTransportTypeHints: Map<import("@shared/models/device.models").TransportType, string>;
    isTransportTypeChanged: boolean;
    hasOldRules: boolean;
    alarmRulesOldVersion: boolean;
    constructor(store: Store<AppState>, destroyRef: DestroyRef, userPermissionsService: UserPermissionsService);
    ngOnInit(): void;
    protected setEntity(entity: DeviceProfile): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DeviceProfileTabsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DeviceProfileTabsComponent, "tb-device-profile-tabs", never, {}, {}, never, never, false, never>;
}
