import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntityTableHeaderComponent } from '../../components/entity/entity-table-header.component';
import { AlarmInfo, AlarmSearchStatus } from '@shared/models/alarm.models';
import { AlarmTableConfig } from './alarm-table-config';
import * as i0 from "@angular/core";
export declare class AlarmTableHeaderComponent extends EntityTableHeaderComponent<AlarmInfo> {
    protected store: Store<AppState>;
    alarmSearchStatusTranslationsMap: Map<AlarmSearchStatus, string>;
    alarmSearchStatusTypes: string[];
    alarmSearchStatusEnum: typeof AlarmSearchStatus;
    get alarmTableConfig(): AlarmTableConfig;
    constructor(store: Store<AppState>);
    searchStatusChanged(searchStatus: AlarmSearchStatus): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlarmTableHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlarmTableHeaderComponent, "tb-alarm-table-header", never, {}, {}, never, never, false, never>;
}
