import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { FormBuilder } from '@angular/forms';
import { DashboardService } from '@core/http/dashboard.service';
import { DashboardInfo } from '@app/shared/models/dashboard.models';
import { TranslateService } from '@ngx-translate/core';
import { DialogComponent } from '@shared/components/dialog.component';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
export interface MakeDashboardPublicDialogData {
    dashboard: DashboardInfo;
}
export declare class MakeDashboardPublicDialogComponent extends DialogComponent<MakeDashboardPublicDialogComponent> implements OnInit {
    protected store: Store<AppState>;
    protected router: Router;
    data: MakeDashboardPublicDialogData;
    translate: TranslateService;
    private dashboardService;
    dialogRef: MatDialogRef<MakeDashboardPublicDialogComponent>;
    fb: FormBuilder;
    dashboard: DashboardInfo;
    publicLink: string;
    constructor(store: Store<AppState>, router: Router, data: MakeDashboardPublicDialogData, translate: TranslateService, dashboardService: DashboardService, dialogRef: MatDialogRef<MakeDashboardPublicDialogComponent>, fb: FormBuilder);
    ngOnInit(): void;
    close(): void;
    onPublicLinkCopied($event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MakeDashboardPublicDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MakeDashboardPublicDialogComponent, "tb-make-dashboard-public-dialog", never, {}, {}, never, never>;
}
