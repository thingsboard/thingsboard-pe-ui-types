import { DestroyRef, OnInit } from '@angular/core';
import { TbPopoverComponent } from '@shared/components/popover.component';
import { EntityId } from '@shared/models/id/entity-id';
import { CalculatedFieldsService } from '@core/http/calculated-fields.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { JobService } from '@core/http/job.service';
import { Job, JobStatus } from '@shared/models/job.models';
import { ThemePalette } from '@angular/material/core';
import { UserPermissionsService } from '@core/http/user-permissions.service';
import * as i0 from "@angular/core";
declare enum ReprocessingState {
    LOADING = "loading",
    CONFIG = "config",
    VALIDATION_ERROR = "validationError",
    SUBMIT = "submit",
    PROCESS = "process",
    RESULTS = "results"
}
export declare class CalculatedFieldReprocessingPanelComponent implements OnInit {
    private popover;
    private calculatedFieldsService;
    private router;
    private destroyRef;
    private translate;
    private jobService;
    private dialog;
    private userPermissionsService;
    entityId: EntityId;
    originatorId: EntityId;
    state: import("@angular/core").WritableSignal<ReprocessingState>;
    submitProgress: import("@angular/core").WritableSignal<number>;
    processProgress: import("@angular/core").WritableSignal<number>;
    processInfo: import("@angular/core").WritableSignal<string>;
    job: import("@angular/core").WritableSignal<Job>;
    timeWindow: import("@shared/models/time/time.models").Timewindow;
    validationMgs: string;
    reprocessingLabel: string;
    JobStatus: typeof JobStatus;
    ReprocessingState: typeof ReprocessingState;
    failedTasks: number;
    totalTasks: number;
    resultLabel: string;
    resultIcon: string;
    resultIconColor: ThemePalette;
    hasWritePermission: boolean;
    private showEntityProcessing;
    private destroy$;
    private readonly submitDuration;
    private readonly processDuration;
    constructor(popover: TbPopoverComponent<CalculatedFieldReprocessingPanelComponent>, calculatedFieldsService: CalculatedFieldsService, router: Router, destroyRef: DestroyRef, translate: TranslateService, jobService: JobService, dialog: MatDialog, userPermissionsService: UserPermissionsService);
    ngOnInit(): void;
    cancel(): void;
    reprocessing(): void;
    openDetails(): void;
    cancelReprocessing($event: Event): void;
    private findJob;
    private startProgress;
    private completeProgress;
    private calculateProgress;
    private waitJobResult;
    private openResult;
    static ɵfac: i0.ɵɵFactoryDeclaration<CalculatedFieldReprocessingPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CalculatedFieldReprocessingPanelComponent, "tb-calculated-field-reprocessing-panel", never, { "entityId": { "alias": "entityId"; "required": true; }; "originatorId": { "alias": "originatorId"; "required": true; }; }, {}, never, never, false, never>;
}
export {};
