import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntityTableHeaderComponent } from '../../components/entity/entity-table-header.component';
import { AlarmInfo } from '@shared/models/alarm.models';
import { AlarmTableConfig } from './alarm-table-config';
import { AlarmFilterConfig } from '@shared/models/query/query.models';
import * as i0 from "@angular/core";
export declare class AlarmTableHeaderComponent extends EntityTableHeaderComponent<AlarmInfo> {
    protected store: Store<AppState>;
    get alarmTableConfig(): AlarmTableConfig;
    constructor(store: Store<AppState>);
    alarmFilterChanged(alarmFilterConfig: AlarmFilterConfig): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlarmTableHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlarmTableHeaderComponent, "tb-alarm-table-header", never, {}, {}, never, never, false, never>;
}
