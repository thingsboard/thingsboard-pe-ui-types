import { DestroyRef } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogComponent } from '@app/shared/components/dialog.component';
import { ReportVariable } from '@home/pages/reporting/template/components/report-component.models';
import * as i0 from "@angular/core";
export interface ReportImageData {
    imageUrl: string;
    width: number;
    height: number;
    entityKeys?: ReportVariable[];
}
export declare class ReportImageDialogComponent extends DialogComponent<ReportImageDialogComponent, ReportImageData> {
    protected store: Store<AppState>;
    protected router: Router;
    data: ReportImageData;
    dialogRef: MatDialogRef<ReportImageDialogComponent, ReportImageData>;
    private destroyRef;
    private fb;
    reportImageFormGroup: UntypedFormGroup;
    lastImageSize: {
        width: number;
        height: number;
    };
    origImageSize: {
        width: number;
        height: number;
    };
    preserveAspect: boolean;
    fetchKeyOptionsFn: any;
    private aspect;
    private initImageSize;
    private entityKeys;
    private keySearchText;
    private latestKeySearchTextResult;
    constructor(store: Store<AppState>, router: Router, data: ReportImageData, dialogRef: MatDialogRef<ReportImageDialogComponent, ReportImageData>, destroyRef: DestroyRef, fb: UntypedFormBuilder);
    cancel(): void;
    save(): void;
    imageSizeUpdated(size: {
        width: number;
        height: number;
    }): void;
    private sourceTypeUpdated;
    private updateImageSize;
    togglePreserveAspect(): void;
    private widthUpdated;
    private heightUpdated;
    private fetchKeyOptions;
    static ɵfac: i0.ɵɵFactoryDeclaration<ReportImageDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ReportImageDialogComponent, "tb-report-image-dialog", never, {}, {}, never, never, false, never>;
}
