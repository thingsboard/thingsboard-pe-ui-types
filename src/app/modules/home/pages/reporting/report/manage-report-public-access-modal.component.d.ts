import { DestroyRef, OnInit } from '@angular/core';
import { DialogComponent } from '@shared/components/dialog.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { ReportService } from '@core/http/report.service';
import { ReportInfo } from '@shared/models/report.models';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
export interface ReportPublicModalData {
    report: ReportInfo;
}
export declare class ManageReportPublicAccessModalComponent extends DialogComponent<ManageReportPublicAccessModalComponent> implements OnInit {
    protected store: Store<AppState>;
    protected router: Router;
    dialogRef: MatDialogRef<ManageReportPublicAccessModalComponent>;
    data: ReportPublicModalData;
    private reportService;
    private destroyRef;
    report: ReportInfo;
    publicStatusControl: FormControl<boolean>;
    constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<ManageReportPublicAccessModalComponent>, data: ReportPublicModalData, reportService: ReportService, destroyRef: DestroyRef);
    ngOnInit(): void;
    get publicReportLink(): string;
    cancel(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ManageReportPublicAccessModalComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ManageReportPublicAccessModalComponent, "tb-manage-report-public-access-modal", never, {}, {}, never, never, false, never>;
}
