import { ReportTemplateSettings, TbReportFormat } from '@shared/models/report.models';
import { DialogComponent } from '@shared/components/dialog.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
export interface ReportTemplateSettingsDialogData {
    subReport: boolean;
    format: TbReportFormat;
    settings: ReportTemplateSettings;
}
export declare class ReportTemplateSettingsDialogComponent extends DialogComponent<ReportTemplateSettingsDialogComponent, ReportTemplateSettingsDialogData> {
    protected store: Store<AppState>;
    protected router: Router;
    data: ReportTemplateSettingsDialogData;
    dialogRef: MatDialogRef<ReportTemplateSettingsDialogComponent, ReportTemplateSettingsDialogData>;
    private fb;
    subReport: boolean;
    format: TbReportFormat;
    settings: ReportTemplateSettings;
    settingsFormControl: FormControl;
    constructor(store: Store<AppState>, router: Router, data: ReportTemplateSettingsDialogData, dialogRef: MatDialogRef<ReportTemplateSettingsDialogComponent, ReportTemplateSettingsDialogData>, fb: FormBuilder);
    cancel(): void;
    save(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ReportTemplateSettingsDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ReportTemplateSettingsDialogComponent, "tb-report-template-settings-dialog", never, {}, {}, never, never, false, never>;
}
