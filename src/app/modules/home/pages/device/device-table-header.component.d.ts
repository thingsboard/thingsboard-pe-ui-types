import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntityTableHeaderComponent } from '../../components/entity/entity-table-header.component';
import { DeviceInfo } from '@app/shared/models/device.models';
import { EntityType } from '@shared/models/entity-type.models';
import { DeviceProfileId } from '../../../../shared/models/id/device-profile-id';
import * as i0 from "@angular/core";
export declare class DeviceTableHeaderComponent extends EntityTableHeaderComponent<DeviceInfo> {
    protected store: Store<AppState>;
    entityType: typeof EntityType;
    constructor(store: Store<AppState>);
    deviceProfileChanged(deviceProfileId: DeviceProfileId): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DeviceTableHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DeviceTableHeaderComponent, "tb-device-table-header", never, {}, {}, never, never>;
}
