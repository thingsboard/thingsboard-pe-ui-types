import { DialogComponent } from '@shared/components/dialog.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';
import { ReportTemplateId } from '@shared/models/id/report-template-id';
import { EntityType } from '@shared/models/entity-type.models';
import { UserId } from '@shared/models/id/user-id';
import { ReportService } from '@core/http/report.service';
import { EntityId } from '@shared/models/id/entity-id';
import * as i0 from "@angular/core";
export interface GenerateReportDialogData {
    reportTemplateId: ReportTemplateId;
}
export declare class GenerateReportDialogComponent extends DialogComponent<GenerateReportDialogComponent, boolean> {
    protected store: Store<AppState>;
    protected router: Router;
    data: GenerateReportDialogData;
    dialogRef: MatDialogRef<GenerateReportDialogComponent, boolean>;
    private reportService;
    generateReportForm: FormGroup<{
        userId: FormControl<UserId>;
        timezone: FormControl<string>;
        originator: FormControl<EntityId>;
        makePublic: FormControl<boolean>;
    }>;
    entityType: typeof EntityType;
    allowedOriginatorTypes: EntityType[];
    constructor(store: Store<AppState>, router: Router, data: GenerateReportDialogData, dialogRef: MatDialogRef<GenerateReportDialogComponent, boolean>, reportService: ReportService);
    cancel(): void;
    generate(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GenerateReportDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GenerateReportDialogComponent, "tb-generate-report-dialog", never, {}, {}, never, never, false, never>;
}
