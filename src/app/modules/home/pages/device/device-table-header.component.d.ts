import { OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntityTableHeaderComponent } from '../../components/entity/entity-table-header.component';
import { DeviceInfo, DeviceInfoFilter } from '@app/shared/models/device.models';
import { EntityType } from '@shared/models/entity-type.models';
import * as i0 from "@angular/core";
export declare class DeviceTableHeaderComponent extends EntityTableHeaderComponent<DeviceInfo> implements OnInit {
    protected store: Store<AppState>;
    entityType: typeof EntityType;
    includeCustomersLabel: string;
    constructor(store: Store<AppState>);
    ngOnInit(): void;
    deviceInfoFilterChanged(deviceInfoFilter: DeviceInfoFilter): void;
    includeCustomersChanged(includeCustomers: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DeviceTableHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DeviceTableHeaderComponent, "tb-device-table-header", never, {}, {}, never, never, false, never>;
}
