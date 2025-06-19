import { EntityTableHeaderComponent } from '@home/components/entity/entity-table-header.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Job, JobFilter, TaskManagerConfig } from '@shared/models/job.models';
import { TimePageLink } from '@shared/models/page/page-link';
import * as i0 from "@angular/core";
export declare class TaskManagerHeaderComponent extends EntityTableHeaderComponent<Job, TimePageLink> {
    protected store: Store<AppState>;
    get taskManagerTableConfig(): TaskManagerConfig;
    constructor(store: Store<AppState>);
    taskManagerChanged(jobFilter: JobFilter): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TaskManagerHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TaskManagerHeaderComponent, "tb-task-manager-table-header", never, {}, {}, never, never, false, never>;
}
