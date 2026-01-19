import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DashboardService } from '@core/http/dashboard.service';
import { DashboardInfo } from '@app/shared/models/dashboard.models';
import { DialogComponent } from '@shared/components/dialog.component';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
export interface DashboardInfoDialogData {
    dashboard: DashboardInfo;
}
export declare class ImportDashboardFileDialogComponent extends DialogComponent<ImportDashboardFileDialogComponent> implements OnInit {
    protected store: Store<AppState>;
    protected router: Router;
    data: DashboardInfoDialogData;
    private dashboardService;
    protected dialogRef: MatDialogRef<ImportDashboardFileDialogComponent>;
    private fb;
    private dashboard;
    currentFileName: string;
    uploadFileFormGroup: FormGroup;
    constructor(store: Store<AppState>, router: Router, data: DashboardInfoDialogData, dashboardService: DashboardService, dialogRef: MatDialogRef<ImportDashboardFileDialogComponent>, fb: FormBuilder);
    ngOnInit(): void;
    cancel(): void;
    save(): void;
    loadDataFromJsonContent(content: string): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<ImportDashboardFileDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ImportDashboardFileDialogComponent, "tb-import-dashboard-file-dialog", never, {}, {}, never, never, false, never>;
}
