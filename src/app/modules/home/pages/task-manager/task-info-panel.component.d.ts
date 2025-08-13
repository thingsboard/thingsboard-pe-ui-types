import { EventEmitter, OnInit } from '@angular/core';
import { Job, JobStatus, JobType } from '@app/shared/models/job.models';
import { TbPopoverComponent } from '@shared/components/popover.component';
import { UserPermissionsService } from '@core/http/user-permissions.service';
import { TranslateService } from '@ngx-translate/core';
import { ReportService } from '@core/http/report.service';
import * as i0 from "@angular/core";
interface TaskError {
    typeName: string;
    detailsUrl: string;
    entityName: string;
    error: string;
}
export declare class TaskInfoPanelComponent implements OnInit {
    private popover;
    private translate;
    private userPermissionsService;
    private reportService;
    job: Job;
    reprocessTask: EventEmitter<void>;
    cancelTask: EventEmitter<void>;
    JobStatus: typeof JobStatus;
    JobType: typeof JobType;
    hasWritePermission: boolean;
    errors: TaskError[];
    timeTaken: number;
    constructor(popover: TbPopoverComponent<TaskInfoPanelComponent>, translate: TranslateService, userPermissionsService: UserPermissionsService, reportService: ReportService);
    ngOnInit(): void;
    cancel(): void;
    reprocess(): void;
    cancelJob(): void;
    downloadReport($event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TaskInfoPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TaskInfoPanelComponent, "tb-task-info", never, { "job": { "alias": "job"; "required": false; }; }, { "reprocessTask": "reprocessTask"; "cancelTask": "cancelTask"; }, never, never, false, never>;
}
export {};
