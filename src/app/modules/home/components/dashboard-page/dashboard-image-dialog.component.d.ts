import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogComponent } from '@app/shared/components/dialog.component';
import { DashboardId } from '@shared/models/id/dashboard-id';
import { DashboardService } from '@core/http/dashboard.service';
import { DomSanitizer } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export interface DashboardImageDialogData {
    dashboardId: DashboardId;
    currentImage?: string;
    dashboardElement: HTMLElement;
}
export interface DashboardImageDialogResult {
    image?: string;
}
export declare class DashboardImageDialogComponent extends DialogComponent<DashboardImageDialogComponent, DashboardImageDialogResult> {
    protected store: Store<AppState>;
    protected router: Router;
    data: DashboardImageDialogData;
    dialogRef: MatDialogRef<DashboardImageDialogComponent, DashboardImageDialogResult>;
    private dashboardService;
    private sanitizer;
    private fb;
    takingScreenshotSubject: BehaviorSubject<boolean>;
    takingScreenshot$: import("rxjs").Observable<boolean>;
    dashboardId: DashboardId;
    imageUrl?: string;
    dashboardElement: HTMLElement;
    dashboardRectFormGroup: UntypedFormGroup;
    dashboardImageFormGroup: UntypedFormGroup;
    constructor(store: Store<AppState>, router: Router, data: DashboardImageDialogData, dialogRef: MatDialogRef<DashboardImageDialogComponent, DashboardImageDialogResult>, dashboardService: DashboardService, sanitizer: DomSanitizer, fb: UntypedFormBuilder);
    private convertUserPercent;
    takeScreenShot(): void;
    cancel(): void;
    save(): void;
    private updateImage;
    static ɵfac: i0.ɵɵFactoryDeclaration<DashboardImageDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DashboardImageDialogComponent, "tb-dashboard-image-dialog", never, {}, {}, never, never, false, never>;
}
